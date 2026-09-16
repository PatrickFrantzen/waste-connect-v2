import { InternalServerErrorException, Logger } from "@nestjs/common";
import { InseratService } from "./inserat.service";
import { InseratDateienService } from "./inserat-dateien.service";
import { InseratStatistikService } from "./inserat-statistik.service";

jest.mock("node:fs/promises", () => ({
  unlink: jest.fn().mockResolvedValue(undefined),
  access: jest.fn().mockResolvedValue(undefined),
  readFile: jest.fn().mockResolvedValue(Buffer.from("pdf")),
  constants: { F_OK: 0 },
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("node:fs/promises");

/**
 * Charakterisierungstests: halten das HEUTIGE Verhalten der God-Services fest,
 * bevor sie entflochten werden (Ticket #6). Sie beschreiben bewusst auch
 * Eigenheiten (z. B. Fehlertexte als Strings statt Exceptions), damit die
 * Entflechtung sie nicht unbemerkt verändert.
 */

/** Baut eine Mongoose-Query-Kette, die am Ende `value` liefert. */
const query = (value: unknown) => {
  const chain: any = {};
  chain.select = jest.fn(() => chain);
  chain.skip = jest.fn(() => chain);
  chain.limit = jest.fn(() => chain);
  chain.exec = jest.fn().mockResolvedValue(value);
  chain.then = (resolve: any, reject: any) =>
    Promise.resolve(value).then(resolve, reject);
  return chain;
};

const inseratDoc = (overrides: any = {}) => ({
  _id: "inserat-1",
  inseratBeschreibung: { abfallbezeichnung: "Altholz" },
  inseratStandort: {
    standort_Bundesland: "Bayern",
    standort_Gemeinde: "München",
    standort_Postleitzahl: "80331",
  },
  inseratFilepath: { bildpath: [], analysepath: [] },
  inseratErsteller: {
    privateModus: false,
    adresse: "Musterweg 1",
    telefonnummer: "0123",
    ansprechpartner: "Max",
    email: "max@example.com",
  },
  ...overrides,
});

const benutzer: any = {
  _id: "benutzer-1",
  email: "max@example.com",
  privateModus: false,
  firmendaten: {
    firmenname: "Muster GmbH",
    firmenadresse: "Musterweg 1",
    stadt: "München",
    firmenwebseite: "https://example.com",
    telefonnummer: "0123",
    ansprechpartner: "Max",
  },
};

describe("InseratService (Charakterisierung)", () => {
  let inseratModel: any;
  let benutzerModel: any;
  let mailService: any;
  let benutzerService: any;
  let service: InseratService;
  let savedDocs: any[];

  beforeEach(() => {
    jest.clearAllMocks();
    savedDocs = [];

    inseratModel = jest.fn(function (this: any, doc: any) {
      Object.assign(this, doc);
      savedDocs.push(this);
      this.save = jest.fn().mockResolvedValue({ ...doc, _id: "neues-inserat" });
    }) as any;

    inseratModel.find = jest.fn(() => query([]));
    inseratModel.findById = jest.fn(() => query(null));
    inseratModel.findOne = jest.fn(() => query(null));
    inseratModel.countDocuments = jest.fn(() => query(0));
    inseratModel.findByIdAndDelete = jest.fn(() => query(null));
    inseratModel.findByIdAndUpdate = jest.fn(() => query(null));
    inseratModel.updateOne = jest.fn().mockResolvedValue({ modifiedCount: 1 });

    benutzerModel = { updateMany: jest.fn().mockResolvedValue({}) };
    mailService = {
      sendInseratErstelltConfirmation: jest.fn(),
      sendInformationAdminDeletedInserat: jest.fn(),
    };
    benutzerService = { updateStandortToStandortFavorit: jest.fn() };

    service = new InseratService(
      inseratModel,
      benutzerModel,
      mailService,
      benutzerService,
      new InseratDateienService(inseratModel),
      new InseratStatistikService(inseratModel)
    );
  });

  describe("create", () => {
    it("legt das Inserat an, verschickt die Bestätigungsmail und meldet die neue ID", async () => {
      const result = await service.create(benutzer, {
        inseratBeschreibung: { abfallbezeichnung: "Altholz" },
        inseratStandort: { standort_Bundesland: "Bayern" },
        inseratLogistik: {},
        inseratFilepath: { bildpath: [], analysepath: [] },
      } as any);

      expect(result).toEqual({
        id: "neues-inserat",
        message: "Inserat erfolgreich erstellt",
      });
      expect(savedDocs[0].inseratErsteller).toEqual({
        firma: "Muster GmbH",
        adresse: "Musterweg 1,München",
        webseite: "https://example.com",
        telefonnummer: "0123",
        email: "max@example.com",
        ansprechpartner: "Max",
        privateModus: false,
      });
      expect(mailService.sendInseratErstelltConfirmation).toHaveBeenCalled();
      expect(benutzerService.updateStandortToStandortFavorit).toHaveBeenCalled();
    });

    // Ticket #7: früher lieferte ein Speicherfehler eine 201 mit
    // Erfolgsform; jetzt schlägt die Anfrage sichtbar fehl.
    it("meldet einen Speicherfehler als 500 statt als Erfolgsantwort", async () => {
      inseratModel = jest.fn(function (this: any) {
        this.save = jest.fn().mockRejectedValue(new Error("db kaputt"));
      }) as any;
      service = new InseratService(
        inseratModel,
        benutzerModel,
        mailService,
        benutzerService,
        new InseratDateienService(inseratModel),
        new InseratStatistikService(inseratModel)
      );
      jest.spyOn(Logger.prototype, "error").mockImplementation(() => undefined);

      const fehler = await service
        .create(benutzer, {
          inseratBeschreibung: {},
          inseratStandort: {},
          inseratLogistik: {},
          inseratFilepath: {},
        } as any)
        .catch((e) => e);

      expect(fehler).toBeInstanceOf(InternalServerErrorException);
      expect(fehler.getStatus()).toBe(500);
      expect(fehler.message).toBe(
        "Bei der Erstellung des Inserats ist ein Fehler aufgetreten. Bitte versuche es erneut oder kontaktiere uns unter info@waste-connect.de"
      );
    });
  });

  describe("Lesen und Filtern", () => {
    it("anonymisiert Inserate im privaten Modus", async () => {
      inseratModel.find.mockReturnValue(
        query([
          inseratDoc({
            inseratErsteller: {
              privateModus: true,
              adresse: "Musterweg 1",
              telefonnummer: "0123",
              ansprechpartner: "Max",
              email: "max@example.com",
            },
          }),
        ])
      );

      const [inserat] = await service.findAll();

      expect(inserat.inseratErsteller).toMatchObject({
        adresse: "keine Angabe",
        telefonnummer: "keine Angabe",
        ansprechpartner: "keine Angabe",
        email: "keine Angabe",
      });
    });

    it("liefert für findOne ohne Treffer den String 'Inserat nicht gefunden'", async () => {
      expect(await service.findOne("unbekannt")).toBe("Inserat nicht gefunden");
    });

    it("liefert für filter ohne Treffer einen Hinweistext", async () => {
      expect(await service.filter({} as any)).toBe(
        "Keine Inserate mit diesen Filterkriterien gefunden"
      );
    });

    it("liefert bei filter die Trefferzahl inkl. Bundesländerverteilung", async () => {
      inseratModel.find.mockReturnValue(query([inseratDoc()]));

      const result: any = await service.filter({} as any);

      expect(result.numberOfInserate).toBe(1);
      expect(result.numberOfInserateByBundesland).toHaveLength(16);
      expect(
        result.numberOfInserateByBundesland.find(
          (b: any) => b.name === "Bayern"
        ).value
      ).toBe(1);
    });

    it("baut aus den Filterkriterien eine Mongo-Query (Regex für die Abfallbezeichnung)", async () => {
      await service.getNumberOfFilterInserate({
        inseratBeschreibung: {
          abfallbezeichnung: "Holz",
          standort_Bundesland: "Bayern",
          leer: "",
        },
      } as any);

      const [builtQuery] = inseratModel.countDocuments.mock.calls[0];
      expect(builtQuery["inseratBeschreibung.abfallbezeichnung"]).toEqual(
        /Holz/i
      );
      expect(builtQuery["inseratStandort.standort_Bundesland"]).toBe("Bayern");
      expect(builtQuery["inseratBeschreibung.leer"]).toBeUndefined();
    });

    it("verwirft Mongo-Operatoren statt sie in die Query zu übernehmen (NoSQL-Injection)", async () => {
      await service.getNumberOfFilterInserate({
        inseratBeschreibung: {
          abfallursprung: { $ne: null } as any,
          standort_Bundesland: "Bayern",
        },
      } as any);

      const [builtQuery] = inseratModel.countDocuments.mock.calls[0];
      expect(builtQuery["inseratBeschreibung.abfallursprung"]).toBeUndefined();
      expect(builtQuery["inseratStandort.standort_Bundesland"]).toBe("Bayern");
    });

    it("liefert bei filterAndPaginate ohne Treffer eine leere Struktur", async () => {
      const result: any = await service.filterAndPaginate({} as any, {
        pageSize: 10,
        currentPage: 1,
      } as any);

      expect(result.inserate).toEqual([]);
      expect(result.totalInserate).toBe(0);
      expect(result.numberOfInserate).toBe(0);
      expect(result.numberOfInserateByBundesland).toHaveLength(16);
    });

    it("blendet beim Admin-Panel die Detailfelder aus", async () => {
      const chain = query([inseratDoc()]);
      inseratModel.find.mockReturnValue(chain);

      await service.getAllInserateForAdminPanel();

      expect(chain.select).toHaveBeenCalledWith([
        "-user",
        "-inseratStandort",
        "-inseratLogistik",
        "-inseratFilepath",
        "-createdAt",
      ]);
    });
  });

  describe("update", () => {
    it("meldet ein nicht gefundenes Inserat", async () => {
      inseratModel.findByIdAndUpdate.mockResolvedValue(null);
      expect(await service.update(benutzer, "x", {} as any)).toEqual({
        message: "Inserat nicht gefunden",
      });
    });

    it("bestätigt die Aktualisierung", async () => {
      inseratModel.findByIdAndUpdate.mockResolvedValue(inseratDoc());
      expect(await service.update(benutzer, "x", {} as any)).toEqual({
        message: "Inserat erfolgreich aktualisiert",
      });
    });
  });

  describe("Löschen", () => {
    it("remove entfernt Inserat, Merkzettel-Einträge und Dateien", async () => {
      inseratModel.findByIdAndDelete.mockResolvedValue(
        inseratDoc({
          inseratFilepath: {
            bildpath: ["https://host/uploads/bild.png"],
            analysepath: ["https://host/uploads/analyse.pdf"],
          },
        })
      );
      inseratModel.find.mockReturnValue(query([]));

      const result: any = await service.remove(benutzer, "inserat-1");

      expect(inseratModel.findByIdAndDelete).toHaveBeenCalledWith({
        _id: "inserat-1",
        user: "benutzer-1",
      });
      expect(benutzerModel.updateMany).toHaveBeenCalledWith(
        { "benutzerinteraktionen.merkzettel._id": "inserat-1" },
        { $pull: { "benutzerinteraktionen.merkzettel": { _id: "inserat-1" } } }
      );
      expect(fs.unlink).toHaveBeenCalledWith("./uploads/bild.png");
      expect(fs.unlink).toHaveBeenCalledWith("./uploads/analyse.pdf");
      expect(result.message).toBe("Du hast erfolgreich das Inserat gelöscht");
      expect(result.inserate).toEqual([]);
    });

    it("remove meldet ein nicht gefundenes Inserat und räumt nichts auf", async () => {
      inseratModel.findByIdAndDelete.mockResolvedValue(null);

      expect(await service.remove(benutzer, "x")).toEqual({
        message: "Inserat nicht gefunden",
      });
      expect(benutzerModel.updateMany).not.toHaveBeenCalled();
      expect(fs.unlink).not.toHaveBeenCalled();
    });

    it("adminDeleteInserat entfernt Inserat, Merkzettel-Einträge, Dateien und informiert den Ersteller", async () => {
      jest.spyOn(console, "log").mockImplementation(() => undefined);
      inseratModel.findByIdAndDelete.mockReturnValue(
        query(
          inseratDoc({
            inseratFilepath: {
              bildpath: ["https://host/uploads/bild.png"],
              analysepath: [],
            },
          })
        )
      );

      const result = await service.adminDeleteInserat("inserat-1");

      expect(benutzerModel.updateMany).toHaveBeenCalledWith(
        { "benutzerinteraktionen.merkzettel._id": "inserat-1" },
        { $pull: { "benutzerinteraktionen.merkzettel": { _id: "inserat-1" } } }
      );
      expect(fs.unlink).toHaveBeenCalledWith("./uploads/bild.png");
      expect(
        mailService.sendInformationAdminDeletedInserat
      ).toHaveBeenCalledWith("Max", "max@example.com", "Altholz");
      expect(result).toEqual({ message: "Inserat erfolgreich gelöscht" });
    });

    it("adminDeleteInserat meldet ein nicht gefundenes Inserat und räumt nichts auf", async () => {
      jest.spyOn(console, "log").mockImplementation(() => undefined);
      inseratModel.findByIdAndDelete.mockReturnValue(query(null));

      expect(await service.adminDeleteInserat("x")).toEqual({
        message: "Inserat nicht gefunden",
      });
      expect(benutzerModel.updateMany).not.toHaveBeenCalled();
      expect(
        mailService.sendInformationAdminDeletedInserat
      ).not.toHaveBeenCalled();
    });
  });
});
