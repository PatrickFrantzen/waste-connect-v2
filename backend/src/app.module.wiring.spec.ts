process.env.JWT_SECRET = process.env.JWT_SECRET || "test-secret";

import { Test } from "@nestjs/testing";
import { getConnectionToken, getModelToken } from "@nestjs/mongoose";
import { InseratModule } from "./protected/inserat/inserat.module";
import { UploadsModule } from "./protected/uploads/uploads.module";
import { AngeboteModule } from "./unprotected/angebote/angebote.module";
import { EmailModule } from "./mixed-routes/email/email.module";
import { OfTheDayCalendarModule } from "./protected/of-the-day-calendar/of-the-day-calendar.module";
import { EntsorgerModule } from "./protected/entsorger/entsorger.module";
import { BenutzerModule } from "./protected/benutzer/benutzer.module";
import { LogistikerModule } from "./protected/logistiker/logistiker.module";
import { AuthModule } from "./unprotected/auth/auth.module";
import { MailingModule } from "./utils/mailing/mailing.module";

/**
 * Smoke-Test der Modulverdrahtung: jedes Feature-Modul muss seine Provider
 * auflösen können. Ohne diesen Test fallen fehlende Provider erst beim Start
 * der Anwendung auf – TypeScript sieht DI-Fehler nicht.
 */
const modelTokens = [
  "InseratNEST",
  "Benutzer",
  "EntsorgerNEST",
  "LogistikerNEST",
  "ofTheDayCalendar",
];

const kompiliere = (mod: any) => {
  let builder = Test.createTestingModule({ imports: [mod] });
  for (const token of modelTokens) {
    builder = builder.overrideProvider(getModelToken(token)).useValue({});
  }
  return builder
    .overrideProvider(getConnectionToken())
    .useValue({})
    .compile();
};

describe("Modulverdrahtung", () => {
  it.each([
    ["InseratModule", InseratModule],
    ["UploadsModule", UploadsModule],
    ["AngeboteModule", AngeboteModule],
    ["EmailModule", EmailModule],
    ["OfTheDayCalendarModule", OfTheDayCalendarModule],
    ["EntsorgerModule", EntsorgerModule],
    ["BenutzerModule", BenutzerModule],
    ["LogistikerModule", LogistikerModule],
    ["AuthModule", AuthModule],
    ["MailingModule", MailingModule],
  ])("%s lässt sich instanziieren", async (_name, mod) => {
    const compiled = await kompiliere(mod);
    await expect(compiled.init()).resolves.toBeDefined();
    await compiled.close();
  });
});
