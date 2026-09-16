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

Stand: NestJS 10 (Backend), Angular 22 + TypeScript 6.0 (Frontend). Beim
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
- `npm install` brauchte einmalig `--legacy-peer-deps` (ts-jest/@babel/core-
  Peer-Konflikt beim Hochziehen); das gebaute `package-lock.json` reicht
  danach für normales `npm ci` (auch in CI), ohne das Flag erneut zu brauchen.

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
