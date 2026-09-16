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
Frontend-Build kopiert), jede sonstige GET-Anfrage fällt an eine
SPA-Fallback-Route, die `index.html` liefert. Ein Hostinger-Slot, eine
Domain, same-origin in Produktion.

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

## Consequences

- Lokale Entwicklung bleibt zweigeteilt (`ng serve` auf 4200, Nest auf 3000)
  und braucht dort weiterhin CORS; nur Produktion ist same-origin.
- Jede neue API-Route muss unter `/api/v1` liegen; die SPA-Fallback-Route
  (`backend/src/spa.controller.ts`) ist explizit vom globalen Präfix
  ausgenommen (`setGlobalPrefix`-`exclude`) und muss nach allen
  Feature-Modulen registriert bleiben, sonst verschluckt ihr Wildcard-Route
  API-Anfragen.
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
