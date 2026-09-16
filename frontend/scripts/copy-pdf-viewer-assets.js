// Angular 21 erlaubt keine Asset-Pfade mehr außerhalb des Workspace-Roots
// (hier: frontend/). Da npm-Workspaces node_modules an die Monorepo-Root
// hoisten, kopieren wir die ngx-extended-pdf-viewer-Assets stattdessen
// einmal pro Build in einen Ordner innerhalb von frontend/.
const fs = require("fs");
const path = require("path");

const from = path.join(
  __dirname,
  "..",
  "..",
  "node_modules",
  "ngx-extended-pdf-viewer",
  "assets"
);
const to = path.join(__dirname, "..", ".pdf-viewer-assets");

fs.rmSync(to, { recursive: true, force: true });
fs.cpSync(from, to, { recursive: true });
console.log(`PDF-Viewer-Assets kopiert: ${from} -> ${to}`);
