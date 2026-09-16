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

## Deployment

Hostinger hPanel Node.js-App-Manager, GitHub-Auto-Deploy auf `main`
(Root-Verzeichnis `backend`, Root-Build-Skript siehe oben). `main` ist per
Branch-Protection geschützt: Merges erfordern einen grünen
Backend-Testlauf ([.github/workflows/test.yml](.github/workflows/test.yml));
Frontend-Tests werden erst mit Schritt 2 in dieses Gate aufgenommen.

Cutover-Strategie: läuft zunächst parallel zur bisherigen Zwei-Projekte-
Lösung unter einer Test-Domain; DNS wird erst nach erfolgreicher Prüfung
umgestellt.
