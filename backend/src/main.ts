import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { RequestMethod, ValidationPipe } from "@nestjs/common";
import { AllExceptionsFilter } from "./common/filters/all-exceptions.filter";
import { ConfigService } from "@nestjs/config";
import { parseCorsOrigins } from "./common/cors-origins";
import * as express from "express";
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

  // API-Routen unter /api/v1 (siehe ADR-0002); die SPA-Fallback-Route bleibt
  // unpräfixiert, damit sie jede nicht-API-Route bedienen kann.
  app.setGlobalPrefix("api/v1", {
    exclude: [{ path: "*", method: RequestMethod.GET }],
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // Einheitliches Fehlerformat für alle Endpunkte (siehe Issue #7).
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use("/uploads", express.static(join(__dirname, "..", "uploads")));
  app.use(express.static(join(__dirname, "..", "public")));

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
