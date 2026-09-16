---
status: accepted
---

# Backend und Frontend als ein Prozess, same-origin unter /api/v1

Backend (`waste-connect-backend`) und Frontend (`recycleShop`, Branch
`Umstellung-auf-NestJS`) liefen als zwei getrennte Repos auf zwei getrennten
Hostinger-Hosting-Plätzen: das NestJS-Backend im hPanel-Node.js-App-Manager
(eigene Subdomain `backend.printbypatrick.de`), das Angular-Frontend als
separates hPanel-Git-Build-Projekt (eigene Subdomain
`wasteconnect.printbypatrick.de`). Das belegte zwei Slots eines auf fünf
Apps begrenzten Hostinger-Plans für eine fachlich zusammengehörige
Anwendung, und erzwang CORS (`CORS_ORIGINS`) sowie Cross-Origin-Ausnahmen in
der Content-Security-Policy des Frontends, die bei jeder neuen
Deployment-Domain erneut angepasst werden mussten.

Ab `waste-connect-v2` liefert ein einziger NestJS-Prozess beides aus:
API-Routen unter globalem Präfix `/api/v1`, der gebaute Angular-Build
statisch aus `backend/public/` (per `scripts/copy-frontend-build.js` aus dem
Frontend-Build kopiert). Ein Hostinger-Slot, eine Domain, same-origin in
Produktion.

**SPA-Routing-Fallback**: Nest beantwortet jede nicht gematchte Route noch
innerhalb seiner eigenen Router-Pipeline mit einer 404 — eigene, danach per
`app.use()` registrierte Middleware (z. B. ein separater
`@Get('*')`-Catch-all-Controller) wird dafür nie erreicht, unabhängig von
`setGlobalPrefix`-`exclude`-Optionen (empirisch geprüft, siehe
Considered-Options). Der Fallback läuft deshalb im ohnehin vorhandenen
globalen `AllExceptionsFilter` (`backend/src/common/filters/all-exceptions.filter.ts`):
eine `NotFoundException` auf einem GET-Request außerhalb von `/api/v1`
liefert `index.html` statt der üblichen JSON-Fehlerform, sofern
`backend/public/index.html` existiert.

## Considered Options

- **Zwei getrennte Prozesse, eine gemeinsame CI-Pipeline** (Option B aus dem
  Grilling): verworfen. Löst das Repo-Verwaltungsproblem, aber nicht das
  eigentliche Ziel — weiterhin zwei Hostinger-Slots.
- **Reverse-Proxy/Prozessmanager (z. B. PM2) im selben Slot**: verworfen.
  Neue bewegliche Teile (Proxy-Konfiguration, zwei Node-Prozesse
  koordinieren) ohne zusätzlichen Nutzen gegenüber der einfacheren
  `express.static`-Lösung, die das Backend für `/uploads` bereits nutzt.
- **API ohne Versions-Präfix (`/api` statt `/api/v1`)**: verworfen. Kostet
  beim Neuaufsetzen nichts extra, verhindert aber einen Breaking-Change
  später, falls Schritt 3 (NestJS-Überarbeitung) an Endpunkt-Signaturen
  rüttelt.
- **Separater `@Get('*')`-Catch-all-Controller für den SPA-Fallback**:
  verworfen, obwohl zunächst so umgesetzt. In Tests gegen den laufenden
  Server verschluckte die Wildcard-Route auch `/api/v1/*`-Anfragen — Nest
  registriert die Controller des Root-Moduls (hier: der Catch-all) vor denen
  importierter Feature-Module, entgegen der Erwartung "Imports zuerst".
  Ein Negative-Lookahead-Regex auf der Route sowie ein explizites
  `app.init()` vor einer nachträglich registrierten Fallback-Middleware
  wurden ebenfalls verworfen (Nests eigener 404-Handler beendet die Anfrage
  bereits während `init()`, bevor später registrierte Middleware je liefe).
  Der Exception-Filter ist der einzige Punkt, der zuverlässig *nach* Nests
  eigener Routenauflösung läuft.

## Consequences

- Lokale Entwicklung bleibt zweigeteilt (`ng serve` auf 4200, Nest auf 3000)
  und braucht dort weiterhin CORS; nur Produktion ist same-origin.
- Jede neue API-Route muss unter `/api/v1` liegen, sonst landet sie im
  SPA-Fallback statt in einem Controller.
- `AllExceptionsFilter` trägt jetzt zwei Verantwortlichkeiten (Fehlerformat
  UND SPA-Fallback) statt einer — bewusst in Kauf genommen, weil es der
  einzige zuverlässige Ort dafür ist (siehe Considered Options).
- `backend.printbypatrick.de` kann als zusätzlicher Hostname auf denselben
  Prozess zeigen (kostet keinen weiteren Slot), ist aber nicht mehr
  Voraussetzung fürs Funktionieren des Frontends.
- Die alten Repos (`waste-connect-backend`, `recycleShop`) bleiben unverändert
  als Archiv bestehen; Git-Historie wird nicht übernommen (bewusste
  Entscheidung, siehe Grilling-Protokoll in der PR-Beschreibung).
- Bekanntes, separates Risiko: `recycleShop` enthält in seiner Historie
  (`nodemon.json`) das produktive MongoDB-Atlas-Passwort und ein
  Gmail-App-Passwort im Klartext — Rotation steht noch aus, ist nicht Teil
  dieses Vorhabens.
