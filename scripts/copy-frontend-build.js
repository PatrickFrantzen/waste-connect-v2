// Kopiert den fertigen Angular-Build ins Backend, damit NestJS ihn per
// express.static ausliefern kann (siehe docs/adr/0001-...).
const fs = require("fs");
const path = require("path");

const from = path.join(__dirname, "..", "frontend", "dist", "recycle-shop", "browser");
const to = path.join(__dirname, "..", "backend", "public");

fs.rmSync(to, { recursive: true, force: true });
fs.cpSync(from, to, { recursive: true });
console.log(`Frontend-Build kopiert: ${from} -> ${to}`);
