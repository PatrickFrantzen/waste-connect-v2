import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { AllExceptionsFilter } from "./common/filters/all-exceptions.filter";
import { ConfigService } from "@nestjs/config";
import { parseCorsOrigins } from "./common/cors-origins";
import * as express from "express";
import { existsSync } from "fs";
import { join } from "path";
import helmet from "helmet";
const bodyParser = require("body-parser");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Security-Header aktiv (siehe ADR-0001). Cross-Origin-Resource-Policy wird
  // gelockert, weil Bilder unter /uploads teils von anderen Origins (lokale
  // Entwicklung: Frontend auf localhost:4200) eingebunden werden.
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" },
    })
  );
  // Frontend und Backend laufen in Produktion same-origin (siehe
  // docs/adr/0002-single-origin-deployment.md); CORS bleibt für die lokale
  // Entwicklung nötig, wo Angular auf localhost:4200 gegen Nest auf
  // localhost:3000 spricht (siehe Issue #8).
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: parseCorsOrigins(configService.get<string>("CORS_ORIGINS")),
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    methods: "GET, POST, PATCH, DELETE, PUT, OPTIONS",
  });

  // API-Routen unter /api/v1 (siehe ADR-0002).
  app.setGlobalPrefix("api/v1");

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // Einheitliches Fehlerformat für alle Endpunkte (siehe Issue #7).
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use("/uploads", express.static(join(__dirname, "..", "uploads")));
  app.use(express.static(join(__dirname, "..", "public")));

  // SPA-Routing-Fallback (siehe docs/adr/0002-single-origin-deployment.md).
  // Unter Nest 12 + Express 5 mountet setGlobalPrefix die API als echten
  // Sub-Router auf /api/v1 (statt wie bisher Pfade als String zu
  // verketten); alles außerhalb dieses Präfixes erreicht Nest (und damit
  // dessen Guards/Filter) gar nicht mehr. Der Fallback muss deshalb als
  // eigene Express-Middleware NACH app.init() sitzen: app.init() bindet
  // erst den /api/v1-Sub-Router, danach hinzugefügte Middleware greift nur
  // noch für alles, was dieser Mount nicht selbst abschließend beantwortet
  // hat (empirisch geprüft — ein früherer Versuch mit einem Catch-all im
  // AllExceptionsFilter griff bei "/api/v1/nope" wegen des jetzt vom
  // Sub-Router gekappten request.url ins Leere).
  await app.init();
  app.use((req, res, next) => {
    if (req.method !== "GET") {
      return next();
    }
    const indexHtml = join(__dirname, "..", "public", "index.html");
    if (!existsSync(indexHtml)) {
      res.status(404).send("Frontend-Build nicht gefunden (public/ fehlt).");
      return;
    }
    res.sendFile(indexHtml);
  });

  // const port = 8080;
  const normalizePort = (val) => {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
  
    if (port >= 0) {
      return port;
    }
  
    return false;
  };
  const port = normalizePort(process.env.PORT || "3000");
  await app.listen(port);
}
bootstrap();
