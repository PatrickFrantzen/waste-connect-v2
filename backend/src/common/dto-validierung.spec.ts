import { verletzteFelder } from "./dto-test.helper";
import { EmailDto, UserEmailDto } from "src/mixed-routes/email/dto/email.dto";
import { UpdateBenutzerDto } from "src/protected/benutzer/dto/update-benutzer.dto";
import { UpdateEntsorgerDto } from "src/protected/entsorger/dto/update-entsorger.dto";
import { UpdateLogistikerDto } from "src/protected/logistiker/dto/update-logistiker.dto";
import { PaginatorDto } from "src/protected/inserat/dto/paginator-inserat.dto";
import {
  CreateOfTheDayCalendarDto,
  GetOfTheDayCalendarDto,
} from "src/protected/of-the-day-calendar/dto/create-of-the-day-calendar.dto";
import { UpdateOfTheDayCalendarDto } from "src/protected/of-the-day-calendar/dto/update-of-the-day-calendar.dto";
import { CreateUploadDto } from "src/protected/uploads/dto/create-upload.dto";
import { DeleteUploadDto } from "src/protected/uploads/dto/delete-upload.dto";
import { UpdateUploadDto } from "src/protected/uploads/dto/update-upload.dto";
import {
  AuthCredentialsDTO,
  UpdatePasswordDTO,
} from "src/unprotected/auth/dto/auth-credentials.dto";
import { Benutzer } from "src/schemas/user.schema";
import { getMetadataStorage } from "class-validator";
import { plainToInstance } from "class-transformer";

/**
 * Validierungs-Sweep zu Ticket #7: die DTOs der state-ändernden Endpunkte
 * lehnen ungültige Eingaben ab, während realistische Nutzlasten der
 * Frontend-Formulare weiterhin durchgehen.
 */
describe("DTO-Validierung der state-ändernden Endpunkte", () => {
  describe("CreateOfTheDayCalendarDto (POST /of-the-day-calendar)", () => {
    const gueltig = {
      inseratID: "662f1c9a1f2b3c4d5e6f7a8b",
      dates: ["24.12.2026", "25.12.2026"],
      type: "waste",
    };

    it("lässt eine gültige Buchung durch", () => {
      expect(verletzteFelder(CreateOfTheDayCalendarDto, gueltig)).toEqual([]);
    });

    it("lehnt einen leeren Body ab", () => {
      expect(verletzteFelder(CreateOfTheDayCalendarDto, {}).sort()).toEqual([
        "dates",
        "inseratID",
        "type",
      ]);
    });

    it("lehnt ein Datum im falschen Format ab (der Service parst TT.MM.JJJJ)", () => {
      expect(
        verletzteFelder(CreateOfTheDayCalendarDto, {
          ...gueltig,
          dates: ["2026-12-24"],
        })
      ).toEqual(["dates"]);
    });

    it("lehnt eine leere Datumsliste ab", () => {
      expect(
        verletzteFelder(CreateOfTheDayCalendarDto, { ...gueltig, dates: [] })
      ).toEqual(["dates"]);
    });

    it("vererbt die Regeln an UpdateOfTheDayCalendarDto, aber optional", () => {
      expect(verletzteFelder(UpdateOfTheDayCalendarDto, {})).toEqual([]);
      expect(
        verletzteFelder(UpdateOfTheDayCalendarDto, { dates: ["24-12-2026"] })
      ).toEqual(["dates"]);
    });

    it("prüft den Typ im GetOfTheDayCalendarDto", () => {
      expect(verletzteFelder(GetOfTheDayCalendarDto, { type: "" })).toEqual([
        "type",
      ]);
    });
  });

  describe("EmailDto / UserEmailDto (POST /email/*)", () => {
    it("lässt eine anonyme Anfrage mit gültiger Adresse durch", () => {
      expect(
        verletzteFelder(EmailDto, {
          email: "interessent@example.com",
          telefonnummer: "0221 123456",
          betreff: "Anfrage zu Altholz",
          nachricht: "Guten Tag, ...",
          ID: "662f1c9a1f2b3c4d5e6f7a8b",
        })
      ).toEqual([]);
    });

    it("lehnt eine ungültige Absenderadresse ab", () => {
      expect(
        verletzteFelder(EmailDto, {
          email: "keine-adresse",
          betreff: "Anfrage",
          nachricht: "Text",
          ID: "1",
        })
      ).toEqual(["email"]);
    });

    it("lehnt eine leere Nachricht ohne Betreff und ohne Bezug ab", () => {
      expect(verletzteFelder(UserEmailDto, {}).sort()).toEqual([
        "ID",
        "betreff",
        "nachricht",
      ]);
    });

    it("lässt eine fehlende Telefonnummer zu", () => {
      expect(
        verletzteFelder(EmailDto, {
          email: "a@b.de",
          betreff: "B",
          nachricht: "N",
          ID: "1",
        })
      ).toEqual([]);
    });
  });

  describe("CreateUploadDto / UpdateUploadDto (POST /upload/*)", () => {
    it("verlangt eine Dokument-ID", () => {
      expect(verletzteFelder(CreateUploadDto, {})).toEqual(["documentID"]);
      expect(verletzteFelder(CreateUploadDto, { documentID: "  " })).toEqual([]);
      expect(
        verletzteFelder(CreateUploadDto, {
          documentID: "662f1c9a1f2b3c4d5e6f7a8b",
        })
      ).toEqual([]);
    });

    it("macht die Dokument-ID im Update-DTO optional", () => {
      expect(verletzteFelder(UpdateUploadDto, {})).toEqual([]);
      expect(verletzteFelder(UpdateUploadDto, { documentID: 42 })).toEqual([
        "documentID",
      ]);
    });
  });

  describe("DeleteUploadDto (DELETE /upload/:id)", () => {
    const gueltig = {
      filename: "analyse.pdf",
      dokumentType: "Inserat",
      dokumentID: "662f1c9a1f2b3c4d5e6f7a8b",
      filePath: "analysepath",
    };

    it("lässt eine gültige Löschanfrage durch", () => {
      expect(verletzteFelder(DeleteUploadDto, gueltig)).toEqual([]);
    });

    it("lehnt einen unbekannten Dateipfad ab", () => {
      expect(
        verletzteFelder(DeleteUploadDto, {
          ...gueltig,
          filePath: "../../etc/passwd",
        })
      ).toEqual(["filePath"]);
    });

    it("lehnt fehlende Query-Parameter ab", () => {
      expect(verletzteFelder(DeleteUploadDto, {}).sort()).toEqual([
        "dokumentID",
        "dokumentType",
        "filePath",
        "filename",
      ]);
    });
  });

  describe("UpdateEntsorgerDto (PATCH /entsorger)", () => {
    it("lässt eine abschnittsweise Aktualisierung durch", () => {
      expect(
        verletzteFelder(UpdateEntsorgerDto, {
          firmendaten: { firmenname: "Muster GmbH", stadt: "Köln" },
        })
      ).toEqual([]);
    });

    it("lässt ein vollständiges Profil durch", () => {
      expect(
        verletzteFelder(UpdateEntsorgerDto, {
          firmendaten: { firmenname: "Muster GmbH" },
          entsorgerdaten: { ansprechpartner: "Max" },
          entsorgerBeschreibung: { taetigkeitsbereich: ["Altholz"] },
          avv: [{ "17 02 01": { bezeichnung: "Holz" } }],
          avvZusammenfassung: ["17 02 01"],
        })
      ).toEqual([]);
    });

    it("lehnt falsche Grundformen ab", () => {
      expect(
        verletzteFelder(UpdateEntsorgerDto, {
          firmendaten: "Muster GmbH",
          avvZusammenfassung: "17 02 01",
        }).sort()
      ).toEqual(["avvZusammenfassung", "firmendaten"]);
    });
  });

  describe("UpdateLogistikerDto (PATCH /logistiker)", () => {
    it("lässt eine abschnittsweise Aktualisierung durch", () => {
      expect(
        verletzteFelder(UpdateLogistikerDto, {
          logistikerBeschreibung: { besonderheiten: "Kipper" },
        })
      ).toEqual([]);
    });

    it("lehnt falsche Grundformen ab", () => {
      expect(
        verletzteFelder(UpdateLogistikerDto, { firmendaten: 5 })
      ).toEqual(["firmendaten"]);
    });
  });

  // LogistikerService.update reicht das DTO direkt an updateOne weiter:
  // die Umwandlung durch `transform: true` darf keine leeren Felder erfinden,
  // sonst würden nicht mitgeschickte Abschnitte überschrieben.
  it("erfindet beim Transformieren keine leeren Profilabschnitte", () => {
    const instanz = plainToInstance(UpdateLogistikerDto, {
      logistikerBeschreibung: { besonderheiten: "Kipper" },
    });

    expect(Object.keys(instanz)).toEqual(["logistikerBeschreibung"]);
  });

  describe("UpdateBenutzerDto (PATCH /benutzer/updateUser)", () => {
    const gueltig = {
      firmendaten: { firmenname: "Muster GmbH", standortFavoriten: [] },
      privateModus: false,
      benutzerdaten: { firstLogin: false },
      benutzerinteraktionen: {
        letzteSuche: [],
        letzteSucheEntsorger: [],
        merkzettel: [],
      },
      profile: { produzent: true, entsorger: false, logistik: false },
      messages: {
        gesendeteNachrichten: [],
        empfangeneNachrichten: [],
        numberOfGesendeteNachrichten: 0,
        numberOfEmpfangeneNachrichten: 0,
      },
    };

    it("lässt die Nutzlast des Profilformulars durch", () => {
      expect(verletzteFelder(UpdateBenutzerDto, gueltig)).toEqual([]);
    });

    it("verlangt benutzerdaten, weil der Service firstLogin daraus liest", () => {
      const { benutzerdaten, ...ohne } = gueltig;
      expect(verletzteFelder(UpdateBenutzerDto, ohne)).toEqual([
        "benutzerdaten",
      ]);
    });

    it("lehnt einen nicht-booleschen privateModus ab", () => {
      expect(
        verletzteFelder(UpdateBenutzerDto, { ...gueltig, privateModus: "ja" })
      ).toEqual(["privateModus"]);
    });

    it("erbt keine Registrierungsfelder mehr aus dem Persistenz-Schema", () => {
      const felder = getMetadataStorage()
        .getTargetValidationMetadatas(UpdateBenutzerDto, "", false, false)
        .map((meta) => meta.propertyName);

      expect(felder).not.toContain("password");
      expect(felder).not.toContain("isAdmin");
      expect(felder).not.toContain("email");
    });
  });

  describe("Benutzer-Schema", () => {
    it("trägt keine Validierungs-Decorators mehr (Persistenz, kein Request)", () => {
      expect(
        getMetadataStorage().getTargetValidationMetadatas(
          Benutzer,
          "",
          false,
          false
        )
      ).toEqual([]);
    });
  });

  describe("PaginatorDto (Query der Listen-Endpunkte)", () => {
    it("wandelt Query-Strings in Zahlen um", () => {
      expect(
        verletzteFelder(PaginatorDto, { pageSize: "10", currentPage: "2" })
      ).toEqual([]);
    });

    it("lehnt unbrauchbare Seitenangaben ab", () => {
      expect(
        verletzteFelder(PaginatorDto, { pageSize: "0", currentPage: "-1" }).sort()
      ).toEqual(["currentPage", "pageSize"]);
    });
  });

  describe("AuthCredentialsDTO / UpdatePasswordDTO (Regression)", () => {
    it("lehnt schwache Passwörter weiterhin ab", () => {
      expect(
        verletzteFelder(AuthCredentialsDTO, {
          email: "max@example.com",
          password: "geheim",
        })
      ).toEqual(["password"]);
    });

    it("lässt gültige Zugangsdaten durch", () => {
      expect(
        verletzteFelder(AuthCredentialsDTO, {
          email: "max@example.com",
          password: "Geheim123!",
        })
      ).toEqual([]);
    });

    it("verlangt beim Passwortwechsel ein neues Passwort", () => {
      expect(verletzteFelder(UpdatePasswordDTO, {})).toEqual(["newPassword"]);
    });
  });
});
