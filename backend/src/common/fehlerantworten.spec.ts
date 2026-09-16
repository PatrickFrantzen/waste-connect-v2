import {
  Body,
  Controller,
  Get,
  INestApplication,
  Logger,
  Post,
  ValidationPipe,
} from "@nestjs/common";
import { Test } from "@nestjs/testing";
import * as request from "supertest";
import { AllExceptionsFilter } from "./filters/all-exceptions.filter";
import { CreateOfTheDayCalendarDto } from "src/protected/of-the-day-calendar/dto/create-of-the-day-calendar.dto";
import { EmailDto } from "src/mixed-routes/email/dto/email.dto";

/**
 * Zusammenspiel von globaler ValidationPipe und globalem Exception-Filter
 * (Ticket #7): über echte HTTP-Anfragen gegen echte DTOs, mit derselben
 * Konfiguration wie in `main.ts`.
 */
@Controller("test")
class TestController {
  @Post("buchung")
  buchung(@Body() dto: CreateOfTheDayCalendarDto) {
    return { ok: true, dto };
  }

  @Post("email")
  email(@Body() dto: EmailDto) {
    return { ok: true, dto };
  }

  @Get("boom")
  boom() {
    throw new Error("MongoServerError: mongodb://geheim@cluster");
  }
}

describe("Einheitliche Fehlerantworten (HTTP)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    // Die erwarteten Fehler werden absichtlich provoziert; ihr Log-Rauschen
    // gehört nicht in die Testausgabe.
    jest.spyOn(Logger.prototype, "error").mockImplementation(() => undefined);
    jest.spyOn(Logger.prototype, "warn").mockImplementation(() => undefined);

    const moduleRef = await Test.createTestingModule({
      controllers: [TestController],
    }).compile();

    app = moduleRef.createNestApplication();
    // identisch zu main.ts
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.useGlobalFilters(new AllExceptionsFilter());
    await app.init();
  });

  afterAll(async () => {
    await app?.close();
    jest.restoreAllMocks();
  });

  it("lehnt eine ungültige Buchung mit 400 und einheitlicher Fehlerform ab", async () => {
    const antwort = await request(app.getHttpServer())
      .post("/test/buchung")
      .send({ inseratID: "", dates: ["2026-12-24"], type: "waste" })
      .expect(400);

    expect(antwort.body).toEqual(
      expect.objectContaining({
        statusCode: 400,
        error: "Bad Request",
        path: "/test/buchung",
        timestamp: expect.any(String),
      })
    );
    expect(antwort.body.message).toEqual(
      expect.arrayContaining([
        "Jedes Datum muss im Format TT.MM.JJJJ vorliegen.",
      ])
    );
  });

  it("lehnt eine E-Mail ohne gültige Adresse mit 400 ab", async () => {
    const antwort = await request(app.getHttpServer())
      .post("/test/email")
      .send({ email: "keine-adresse", betreff: "", nachricht: "", ID: "" })
      .expect(400);

    expect(antwort.body.statusCode).toBe(400);
    expect(antwort.body.error).toBe("Bad Request");
    expect(antwort.body.message).toEqual(
      expect.arrayContaining(["Bitte gib eine gültige E-Mail-Adresse an."])
    );
  });

  it("lässt gültige Eingaben durch", async () => {
    await request(app.getHttpServer())
      .post("/test/buchung")
      .send({ inseratID: "abc", dates: ["24.12.2026"], type: "waste" })
      .expect(201);
  });

  it("beantwortet unerwartete Fehler mit 500 ohne interne Details", async () => {
    const antwort = await request(app.getHttpServer())
      .get("/test/boom")
      .expect(500);

    expect(antwort.body).toEqual(
      expect.objectContaining({
        statusCode: 500,
        error: "Internal Server Error",
        path: "/test/boom",
      })
    );
    expect(JSON.stringify(antwort.body)).not.toContain("mongodb://");
  });

  it("liefert für unbekannte Routen dieselbe Fehlerform", async () => {
    const antwort = await request(app.getHttpServer())
      .get("/gibt-es-nicht")
      .expect(404);

    expect(antwort.body).toEqual(
      expect.objectContaining({
        statusCode: 404,
        error: "Not Found",
        path: "/gibt-es-nicht",
        timestamp: expect.any(String),
      })
    );
  });
});
