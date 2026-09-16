# waste-connect-v2

Vereintes Repo für den waste-connect-Marktplatz: NestJS-Backend (`backend/`)
und Angular-Frontend (`frontend/`), als npm-Workspace, gemeinsam auf **einem**
Hostinger-Slot deployt. Vorgängerprojekte: `waste-connect-backend` und
`recycleShop` (Branch `Umstellung-auf-NestJS`) — beide bleiben als Archiv
bestehen, siehe [docs/adr/0002-single-origin-deployment.md](docs/adr/0002-single-origin-deployment.md).

## Architektur

Ein einziger Node-Prozess:

- NestJS beantwortet alle API-Routen unter `/api/v1/*`.
- NestJS liefert den gebauten Angular-Build statisch aus `backend/public/`
  aus (kopiert dorthin durch `scripts/copy-frontend-build.js`).
- Jede nicht-API-GET-Anfrage, die zu keiner Route passt, fällt an den
  globalen [AllExceptionsFilter](backend/src/common/filters/all-exceptions.filter.ts),
  der dann `index.html` statt einer JSON-Fehlermeldung liefert
  (SPA-Routing-Fallback, ersetzt eine `.htaccess`-Rewrite-Regel — warum das
  im Exception-Filter statt einem eigenen Controller passiert, siehe
  [ADR-0002](docs/adr/0002-single-origin-deployment.md)).

Frontend und Backend sind dadurch in Produktion **same-origin** — kein CORS,
keine Cross-Origin-CSP-Ausnahmen nötig.

## Lokale Entwicklung

Backend und Frontend laufen lokal weiterhin getrennt (`ng serve` auf 4200,
Nest auf 3000); `frontend/src/environments/environment.development.ts` zeigt
per absoluter URL auf `http://localhost:3000/api/v1`.

```bash
npm install
npm run build -w backend  # oder: npm start -w backend / npm start -w frontend
```

## Build & Test

```bash
npm run build   # Frontend bauen -> nach backend/public kopieren -> Backend bauen
npm test        # Backend-Jest + Frontend-Karma
```

**Bekannte Lücke**: Ein Teil der Angular-Gerüst-Specs (Auto-generierte
Component-Tests) läuft noch nicht durch — 27/36 grün, Rest scheitert an
fehlenden `ActivatedRoute`-Mocks. Gehört zu Schritt 2 (testbasierte
Angular-Überarbeitung), nicht Teil dieses Repo-Umzugs. CI gatet deshalb
vorerst nur auf dem vollständig grünen Backend-Testlauf (siehe unten).

## Dependency-Updates

Stand: NestJS 12 (Backend), Angular 22 + TypeScript 6.0 (Frontend). Beim
nächsten Update unbedingt beachten:

- **Hoisting-Duplikate**: `npm install <pkg>@x -w <workspace>` aktualisiert
  oft nur eine verschachtelte Kopie in `<workspace>/node_modules`, während die
  an die Root gehoistete Kopie alt bleibt — zwei Instanzen desselben Pakets
  laufen dann parallel (bei `rxjs`, `mongoose` und `@angular/core` schon
  passiert, jeweils mit kryptischen Laufzeit-/Typfehlern statt einer
  offensichtlichen Fehlermeldung). Gegenmittel: Version in `package.json`
  (`overrides`) eintragen, dann komplett `rm -rf node_modules */node_modules
  package-lock.json && npm install` statt einem gezielten `npm install -w`.
- **`ng update` funktioniert in diesem Workspace nicht zuverlässig**
  ("Package '@angular/core' is not a dependency") — Versionen in
  `frontend/package.json` manuell setzen und neu installieren.
- **TypeScript-Major-Sprünge** können Namespace-Imports von CJS-Paketen
  brechen (`import * as x from "y"` → `import x from "y"`), weil sich die
  Interop-Strenge ändert: schon bei `bcryptjs` (Jest-Mock auf gefrorenem
  Namespace-Objekt) und `supertest` (TS2349, nicht mehr aufrufbar) passiert.
  Symptome tauchen erst beim Bauen/Testen auf, nicht als offensichtlicher
  Versions-Fehler.
- Root-`package.json` hat `"typescript": "6.0.3"` als Override, weil Backend
  (`^5.1.3`) und Frontend (Angular 22 verlangt `>=6.0 <6.1`) sonst
  unvereinbare Ranges hätten — Backend läuft inzwischen mitgetestet auf 6.0.3.
- `legacy-peer-deps=true` steht fest in [.npmrc](.npmrc) (ts-jest/@babel/core-
  Peer-Konflikt beim Hochziehen) statt nur einmalig als Kommandozeilen-Flag,
  damit jede Umgebung denselben Auflösungsmodus nutzt.
- **`npm ci` kann mit falscher "Missing: `<pkg>` from lock file"-Meldung
  scheitern, obwohl das Lockfile korrekt ist** — wenn die npm-Version
  abweicht, die es erzeugt hat. Ist mir mit lokal npm 11.6.0 vs. der über
  `actions/setup-node`+Node 22 gebündelten älteren npm-Version in CI passiert
  (zweimal reproduziert, jedes Mal ein anderer Fix — `.npmrc` allein hat es
  NICHT gelöst). Fix: CI pinnt jetzt explizit `npm install -g npm@11` vor
  `npm ci` ([.github/workflows/test.yml](.github/workflows/test.yml)). Bei
  künftigen `npm install`-Läufen mit einer neuen lokalen npm-Version diesen
  Pin mit hochziehen, sonst reißt CI unabhängig vom eigentlichen Update.
- **NestJS 12 ist ESM-only** (`@nestjs/common`, `core`, ... liefern
  `"type": "module"`, kein CommonJS-Export mehr) — betrifft nicht nur
  `@nestjs/mapped-types` (das bleibt deshalb absichtlich bei `^2.0.5`/2.1.1
  statt 12.0.0, siehe Commit-Historie). Braucht **keine** Migration der
  eigenen Imports: Node ≥24.9 kann ESM-Pakete nativ per `require()` laden,
  und seit Jest 30 nutzt `jest-runtime` das automatisch mit — vorausgesetzt,
  `NODE_OPTIONS=--experimental-vm-modules` ist gesetzt (steht fest in den
  `test`-Skripten in [backend/package.json](backend/package.json), macht
  `vm.SourceTextModule` verfügbar, ohne das bleibt Jest auf dem alten,
  CJS-only-Pfad und bricht mit "Must use import to load ES Module").
- **NestJS 12 bringt zusätzlich Express 5 mit** (`@nestjs/platform-express`
  pinnt es als direkte Abhängigkeit) — eigener Major, unabhängig von der
  ESM-Frage. `setGlobalPrefix("api/v1")` mountet die API seitdem als
  echten `app.use('/api/v1', ...)`-Sub-Router statt wie bisher Pfade als
  String zu verketten: Requests außerhalb des Präfixes erreichen Nest
  (Guards, Filter, ...) gar nicht mehr, und `request.url` ist innerhalb des
  Sub-Routers auf den Teil nach dem Präfix gekappt (`request.originalUrl`
  verwenden, wo der volle Pfad gebraucht wird). Der SPA-Fallback musste
  deshalb vom `AllExceptionsFilter` in eine reine Express-Middleware nach
  `app.init()` wandern — Details und verworfene Alternativen in
  [ADR-0002](docs/adr/0002-single-origin-deployment.md). Multer sprang
  gleichzeitig auf 2.x; die bestehenden Upload-Tests laufen zwar grün,
  eine genauere Prüfung der Multer-2-Migration steht noch aus (Schritt 3).

## Deployment

Hostinger hPanel Node.js-App-Manager, GitHub-Auto-Deploy auf `main`
(Root-Verzeichnis `backend`, Root-Build-Skript siehe oben). CI
([.github/workflows/test.yml](.github/workflows/test.yml)) läuft bei jedem
Push/PR und prüft den Backend-Testlauf.

**Keine Branch-Protection**: GitHub verlangt dafür bei privaten Repos einen
Pro-Plan; auf dem aktuellen Free-Plan lässt sich `main` nicht technisch vor
Merges bei rotem CI-Lauf schützen. Der grüne Haken vor dem Mergen muss
bis auf Weiteres manuell geprüft werden. Nachzutragen, sobald ein
Plan-Upgrade oder ein öffentliches Repo infrage kommt.

Cutover-Strategie: läuft zunächst parallel zur bisherigen Zwei-Projekte-
Lösung unter einer Test-Domain; DNS wird erst nach erfolgreicher Prüfung
umgestellt.
