import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { existsSync } from "fs";
import { join } from "path";

const INDEX_HTML = join(__dirname, "..", "public", "index.html");

// Liefert das Angular-Frontend für jede Route, die keine API-Route ist
// (siehe docs/adr/0002-single-origin-deployment.md). Bleibt außerhalb des
// globalen /api/v1-Präfix (siehe main.ts, setGlobalPrefix exclude).
@Controller()
export class SpaController {
  @Get("*")
  serveIndex(@Res() res: Response) {
    if (!existsSync(INDEX_HTML)) {
      res.status(404).send("Frontend-Build nicht gefunden (public/ fehlt).");
      return;
    }
    res.sendFile(INDEX_HTML);
  }
}
