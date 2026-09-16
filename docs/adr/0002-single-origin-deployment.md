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

**SPA-Routing-Fallback** (Stand: NestJS 12 / Express 5, `backend/src/main.ts`):
eine Express-Middleware, registriert per `app.use()` **nach** `await
app.init()`, liefert `index.html` für jeden verbleibenden GET-Request.
`app.init()` bindet dabei bereits den kompletten `/api/v1`-Sub-Router (siehe
unten); erst danach hinzugefügte Middleware greift nur noch für alles, was
dieser Mount nicht selbst beantwortet hat — echte API-404s enden weiterhin
innerhalb des Sub-Routers im `AllExceptionsFilter`
(`backend/src/common/filters/all-exceptions.filter.ts`, reines
Fehlerformat, keine SPA-Logik mehr) und erreichen diese Middleware gar
nicht erst.

**setGlobalPrefix und der Sub-Router-Mount (NestJS 12 / Express 5)**: Seit
Nest 12 (bundlet Express 5) mountet `app.setGlobalPrefix("api/v1")` die
gesamte API intern als echten `app.use('/api/v1', ...)`-Sub-Router, statt
wie bisher unter Nest ≤11 jede Route-Pfad-Zeichenkette mit dem Präfix zu
verketten. Zwei spürbare Folgen: (1) Requests außerhalb von `/api/v1`
erreichen Nest — und damit Guards, Interceptors, den globalen Exception-
Filter — überhaupt nicht mehr, nur noch rohe, vorher registrierte
Express-Middleware sieht sie. (2) Innerhalb des Sub-Routers ist
`request.url` auf den Teil *nach* dem Präfix gekappt (Express-Standard-
verhalten bei gemounteten Routern); der Exception-Filter nutzt deshalb
`request.originalUrl` statt `request.url` für die `path`-Angabe in der
Fehlerantwort.

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
- **Separater `@Get('*')`-Catch-all-Controller für den SPA-Fallback**
  (Nest ≤11-Ära): verworfen. In Tests gegen den laufenden Server
  verschluckte die Wildcard-Route auch `/api/v1/*`-Anfragen — Nest
  registriert die Controller des Root-Moduls (hier: der Catch-all) vor denen
  importierter Feature-Module, entgegen der Erwartung "Imports zuerst".
- **SPA-Fallback im `AllExceptionsFilter`** (Nest ≤11-Ära): funktionierte
  unter Nest 10/11, wurde beim Sprung auf Nest 12 aber falsch: der
  Sub-Router-Mount (siehe oben) kappt `request.url` innerhalb des Filters
  auf den Teil nach `/api/v1`, wodurch `/api/v1/nope` fälschlich als
  Nicht-API-Pfad erkannt wurde und `index.html` statt JSON lieferte —
  während echte Nicht-API-Pfade wie `/xyz` den Filter unter Nest 12 gar
  nicht mehr erreichten (siehe oben) und stattdessen Express' rohe
  Default-404-Seite bekamen. Durch die jetzige Express-Middleware nach
  `app.init()` ersetzt, die von der Sub-Router-Mount-Frage unabhängig ist.

## Consequences

- Lokale Entwicklung bleibt zweigeteilt (`ng serve` auf 4200, Nest auf 3000)
  und braucht dort weiterhin CORS; nur Produktion ist same-origin.
- Jede neue API-Route muss unter `/api/v1` liegen, sonst landet sie im
  SPA-Fallback statt in einem Controller.
- `AllExceptionsFilter` ist wieder rein auf Fehlerformat beschränkt (siehe
  Considered Options); der SPA-Fallback sitzt als eigene Middleware in
  `main.ts`.
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
