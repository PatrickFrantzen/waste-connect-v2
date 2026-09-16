import { ConflictException } from "@nestjs/common";
import { OfTheDayCalendarService } from "./of-the-day-calendar.service";

/**
 * Charakterisierungstests für den OfTheDayCalendarService (Buchung und
 * Freigabe von Kalendertagen) vor der Entflechtung (Ticket #6).
 */

const query = (value: unknown) => {
  const chain: any = {};
  chain.select = jest.fn(() => chain);
  chain.skip = jest.fn(() => chain);
  chain.exec = jest.fn().mockResolvedValue(value);
  chain.then = (resolve: any, reject: any) =>
    Promise.resolve(value).then(resolve, reject);
  return chain;
};

const benutzer: any = {
  email: "max@example.com",
  firmendaten: { ansprechpartner: "Max", firmenname: "Muster GmbH" },
};

const utc = (jahr: number, monat: number, tag: number) =>
  new Date(Date.UTC(jahr, monat - 1, tag));

describe("OfTheDayCalendarService (Charakterisierung)", () => {
  let calendarModel: any;
  let inseratModel: any;
  let mailingService: any;
  let inseratService: any;
  let service: OfTheDayCalendarService;
  let neueKalender: any[];

  beforeEach(() => {
    jest.clearAllMocks();
    neueKalender = [];

    calendarModel = jest.fn(function (this: any, doc: any) {
      Object.assign(this, doc);
      this.markModified = jest.fn();
      this.save = jest.fn().mockResolvedValue(this);
      neueKalender.push(this);
    }) as any;
    calendarModel.find = jest.fn(() => query([]));
    calendarModel.findOne = jest.fn(() => query(null));
    calendarModel.updateOne = jest.fn().mockResolvedValue({ modifiedCount: 1 });
    calendarModel.aggregate = jest.fn().mockResolvedValue([]);

    inseratModel = {
      findById: jest.fn(() => query(null)),
      findOne: jest.fn(() => query(null)),
      countDocuments: jest.fn(() => query(0)),
    };
    mailingService = {
      sendBuchungConfirmation: jest.fn(),
      sendBuchungToAdmin: jest.fn(),
    };
    inseratService = {
      modifyPrivateInserate: jest.fn((inserate) => inserate),
    };

    service = new OfTheDayCalendarService(
      calendarModel,
      inseratModel,
      mailingService
    );
  });

  describe("addBlockedDays", () => {
    it("legt für einen unbekannten Typ einen neuen Kalender an und blockt die Tage in UTC", async () => {
      const result = await service.addBlockedDays(
        { inseratID: "inserat-1", dates: ["24.12.2026"], type: "entsorger" },
        benutzer
      );

      expect(neueKalender).toHaveLength(1);
      const [gebuchterTag] = neueKalender[0].blockedDays;
      expect(gebuchterTag.day.toISOString()).toBe("2026-12-24T00:00:00.000Z");
      expect(gebuchterTag.inseratID).toBe("inserat-1");
      expect(gebuchterTag.freigegeben).toBe(false);
      expect(gebuchterTag.bestellnummer).toEqual(expect.any(String));
      expect(neueKalender[0].save).toHaveBeenCalled();
      expect(result).toEqual({
        message:
          "Du hast erfolgreich einen entsorger of the Day gebucht. Wir haben dir eine Bestätigung per E-Mail geschickt.",
      });
    });

    it("hängt weitere Tage an einen bestehenden Kalender an", async () => {
      const kalender = {
        blockedDays: [] as any[],
        markModified: jest.fn(),
        save: jest.fn().mockResolvedValue(undefined),
      };
      calendarModel.findOne.mockReturnValue(query(kalender));

      await service.addBlockedDays(
        { inseratID: "inserat-1", dates: ["01.02.2027", "02.02.2027"], type: "entsorger" },
        benutzer
      );

      expect(calendarModel).not.toHaveBeenCalled();
      expect(kalender.blockedDays).toHaveLength(2);
      expect(kalender.save).toHaveBeenCalled();
    });

    it("vergibt für alle Tage einer Buchung dieselbe Bestellnummer", async () => {
      await service.addBlockedDays(
        { inseratID: "inserat-1", dates: ["01.02.2027", "02.02.2027"], type: "entsorger" },
        benutzer
      );

      const [tag1, tag2] = neueKalender[0].blockedDays;
      expect(tag1.bestellnummer).toBe(tag2.bestellnummer);
    });

    // Regression zu Ticket #7: der Duplikat-Check lief früher in einem
    // async-forEach-Callback. Die Exception erreichte den Aufrufer nie,
    // sondern landete als unbehandelte Rejection (prozess-fatal), während der
    // Client eine Erfolgsmeldung bekam.
    it("lehnt einen bereits gebuchten Tag mit 409 ab, statt Erfolg zu melden", async () => {
      const kalender = {
        blockedDays: [
          {
            day: utc(2026, 12, 24),
            inseratID: "inserat-alt",
            freigegeben: false,
            bestellnummer: "1",
          },
        ] as any[],
        markModified: jest.fn(),
        save: jest.fn().mockResolvedValue(undefined),
      };
      calendarModel.findOne.mockReturnValue(query(kalender));

      const fehler = await service
        .addBlockedDays(
          { inseratID: "inserat-1", dates: ["24.12.2026"], type: "waste" },
          benutzer
        )
        .catch((e) => e);

      expect(fehler).toBeInstanceOf(ConflictException);
      expect(fehler.getStatus()).toBe(409);
      expect(fehler.message).toBe("Der Tag 24.12.2026 ist bereits gebucht.");
      expect(kalender.save).not.toHaveBeenCalled();
      expect(kalender.blockedDays).toHaveLength(1);
    });

    it("bricht bei einem Duplikat ab, ohne die vorherigen Tage zu speichern", async () => {
      const kalender = {
        blockedDays: [
          {
            day: utc(2027, 2, 2),
            inseratID: "inserat-alt",
            freigegeben: false,
            bestellnummer: "1",
          },
        ] as any[],
        markModified: jest.fn(),
        save: jest.fn().mockResolvedValue(undefined),
      };
      calendarModel.findOne.mockReturnValue(query(kalender));

      await expect(
        service.addBlockedDays(
          {
            inseratID: "inserat-1",
            dates: ["01.02.2027", "02.02.2027"],
            type: "waste",
          },
          benutzer
        )
      ).rejects.toBeInstanceOf(ConflictException);

      expect(kalender.save).not.toHaveBeenCalled();
      expect(mailingService.sendBuchungConfirmation).not.toHaveBeenCalled();
    });

    it("verschickt beim Typ 'waste' Bestätigung und Admin-Info mit der Abfallbezeichnung", async () => {
      inseratModel.findById.mockReturnValue(
        query({ inseratBeschreibung: { abfallbezeichnung: "Altholz" } })
      );

      await service.addBlockedDays(
        { inseratID: "inserat-1", dates: ["24.12.2026"], type: "waste" },
        benutzer
      );

      expect(mailingService.sendBuchungConfirmation).toHaveBeenCalledWith(
        "max@example.com",
        "Altholz",
        "waste",
        ["24.12.2026"],
        expect.any(String)
      );
      expect(mailingService.sendBuchungToAdmin).toHaveBeenCalledWith(
        "Max",
        "Muster GmbH",
        "max@example.com",
        "Altholz",
        "inserat-1",
        "waste",
        ["24.12.2026"],
        expect.any(String)
      );
    });

    it("verschickt für andere Typen keine Mails", async () => {
      await service.addBlockedDays(
        { inseratID: "inserat-1", dates: ["24.12.2026"], type: "entsorger" },
        benutzer
      );

      expect(mailingService.sendBuchungConfirmation).not.toHaveBeenCalled();
      expect(mailingService.sendBuchungToAdmin).not.toHaveBeenCalled();
    });

    it("meldet Speicherfehler als 500 mit Support-Hinweis", async () => {
      jest.spyOn(console, "error").mockImplementation(() => undefined);
      calendarModel.findOne.mockReturnValue(
        query({
          blockedDays: [],
          markModified: jest.fn(),
          save: jest.fn().mockRejectedValue(new Error("db kaputt")),
        })
      );

      await expect(
        service.addBlockedDays(
          { inseratID: "inserat-1", dates: ["24.12.2026"], type: "waste" },
          benutzer
        )
      ).rejects.toThrow(
        "Beim Speichern deiner Bestellung ist ein Fehler unterlaufen. Bitte wende dich an das Team von www.waste-connect.de."
      );
    });
  });

  describe("getBlockedDays", () => {
    it("legt für einen unbekannten Typ einen leeren Kalender an", async () => {
      const blockedDays = await service.getBlockedDays("waste");

      expect(neueKalender).toHaveLength(1);
      expect(neueKalender[0].save).toHaveBeenCalled();
      expect(blockedDays).toEqual([]);
    });

    it("liefert nur Tage ab heute", async () => {
      const gestern = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const morgen = new Date(Date.now() + 24 * 60 * 60 * 1000);
      calendarModel.find.mockReturnValue(
        query([
          {
            blockedDays: [
              { day: gestern, inseratID: "alt" },
              { day: morgen, inseratID: "neu" },
            ],
          },
        ])
      );

      const blockedDays = await service.getBlockedDays("waste");

      expect(blockedDays.map((tag: any) => tag.inseratID)).toEqual(["neu"]);
    });
  });

  describe("getAllReservedDays", () => {
    it("liefert die reservierten Tage der letzten Monate aus der Aggregation", async () => {
      calendarModel.aggregate.mockResolvedValue([
        { blockedDays: { inseratID: "inserat-1" } },
      ]);

      expect(await service.getAllReservedDays()).toEqual([
        { inseratID: "inserat-1" },
      ]);
      const [pipeline] = calendarModel.aggregate.mock.calls[0];
      expect(pipeline[0]).toEqual({ $unwind: "$blockedDays" });
      expect(pipeline[1].$match.type).toBe("waste");
    });
  });

  describe("updateWasteReservation", () => {
    it("gibt den passenden Tag frei", async () => {
      const result = await service.updateWasteReservation(
        "inserat-1",
        new Date("2027-02-01T13:45:00.000Z"),
        true
      );

      expect(calendarModel.updateOne).toHaveBeenCalledWith(
        {
          blockedDays: {
            $elemMatch: {
              inseratID: "inserat-1",
              day: utc(2027, 2, 1),
            },
          },
        },
        { $set: { "blockedDays.$.freigegeben": true } }
      );
      expect(result).toEqual({
        message: "Reservierung erfolgreich aktualisiert",
      });
    });

    it("meldet einen nicht gefundenen Eintrag als 404", async () => {
      calendarModel.updateOne.mockResolvedValue({ modifiedCount: 0 });

      await expect(
        service.updateWasteReservation("inserat-1", new Date(), true)
      ).rejects.toThrow("Eintrag nicht gefunden");
    });
  });

  describe("deleteWasteReservation", () => {
    it("entfernt alle Tage des Inserats", async () => {
      jest.spyOn(console, "log").mockImplementation(() => undefined);

      const result = await service.deleteWasteReservation("inserat-1");

      expect(calendarModel.updateOne).toHaveBeenCalledWith(
        { "blockedDays.inseratID": "inserat-1" },
        { $pull: { blockedDays: { inseratID: "inserat-1" } } }
      );
      expect(result).toEqual({ message: "Reservierung erfolgreich gelöscht" });
    });

    it("liefert nichts zurück, wenn es keinen Eintrag gab", async () => {
      jest.spyOn(console, "log").mockImplementation(() => undefined);
      calendarModel.updateOne.mockResolvedValue({ modifiedCount: 0 });

      expect(await service.deleteWasteReservation("inserat-1")).toBeUndefined();
    });
  });
});
