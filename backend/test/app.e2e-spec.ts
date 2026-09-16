process.env.JWT_SECRET = process.env.JWT_SECRET || "test-secret";

import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { getConnectionToken, getModelToken } from "@nestjs/mongoose";
import request from "supertest";
import { AppModule } from "./../src/app.module";

/**
 * Bootet die komplette Anwendung und ruft eine real existierende Route auf.
 * Vorher wurde hier GET / getestet – eine Route, die es nie gab.
 *
 * Die Mongoose-Verbindung wird ersetzt, damit der Test ohne laufende Datenbank
 * durchläuft; die Modulverdrahtung wird trotzdem vollständig aufgebaut.
 */
const modelTokens = [
  "InseratNEST",
  "Benutzer",
  "EntsorgerNEST",
  "LogistikerNEST",
  "ofTheDayCalendar",
];

describe("AppModule (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    let builder = Test.createTestingModule({ imports: [AppModule] });
    for (const token of modelTokens) {
      builder = builder.overrideProvider(getModelToken(token)).useValue({});
    }
    const moduleFixture: TestingModule = await builder
      .overrideProvider(getConnectionToken())
      // on()/close() brauchen ConnectionService bzw. der Shutdown-Hook
      // von @nestjs/mongoose.
      .useValue({ on: () => undefined, close: async () => undefined })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("GET /health meldet die Anwendung als erreichbar", () => {
    return request(app.getHttpServer())
      .get("/health")
      .expect(200)
      .expect({ status: "ok" });
  });

  it("antwortet auf eine unbekannte Route mit 404", () => {
    return request(app.getHttpServer()).get("/gibt-es-nicht").expect(404);
  });
});
