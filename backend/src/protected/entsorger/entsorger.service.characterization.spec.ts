import { EntsorgerService } from "./entsorger.service";

/**
 * Charakterisierungstests für den EntsorgerService (Profil-Verwaltung),
 * geschrieben vor der Entflechtung (Ticket #6).
 */

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

const entsorgerDoc = (overrides: any = {}) => ({
  _id: "entsorger-1",
  private: false,
  firmendaten: {
    firmenname: "Muster GmbH",
    firmenadresse: "Musterweg 1",
    stadt: "München",
    postleitzahl: "80331",
    bundesland: "Bayern",
    telefonnummer: "0123",
    ansprechpartner: "Max",
  },
  entsorgerdaten: {
    ansprechpartner: "Max",
    email: "max@example.com",
    telefonnummer: "0123",
  },
  ...overrides,
});

const benutzer: any = {
  _id: "benutzer-1",
  firmendaten: {
    firmenname: "Muster GmbH",
    firmenadresse: "Musterweg 1",
    firmenwebseite: "https://example.com",
  },
};

const SELECT_FELDER = ["-userid", "-createdAt", "-isActivated", "-__v"];

describe("EntsorgerService (Charakterisierung)", () => {
  let entsorgerModel: any;
  let service: EntsorgerService;
  let savedDocs: any[];

  beforeEach(() => {
    jest.clearAllMocks();
    savedDocs = [];

    entsorgerModel = jest.fn(function (this: any, doc: any) {
      Object.assign(this, doc);
      savedDocs.push(this);
      this.save = jest.fn().mockResolvedValue(doc);
    }) as any;
    entsorgerModel.find = jest.fn(() => query([]));
    entsorgerModel.findOne = jest.fn(() => query(null));
    entsorgerModel.findById = jest.fn(() => query(null));
    entsorgerModel.countDocuments = jest.fn(() => query(0));
    entsorgerModel.updateOne = jest.fn().mockResolvedValue({ modifiedCount: 1 });

    service = new EntsorgerService(entsorgerModel);
  });

  describe("create", () => {
    it("legt ein leeres, nicht aktiviertes Entsorgerprofil an", async () => {
      await service.create("benutzer-1" as any);

      expect(savedDocs).toHaveLength(1);
      expect(savedDocs[0]).toMatchObject({
        userid: "benutzer-1",
        isActivated: false,
        private: false,
        avv: [],
        avvZusammenfassung: [],
      });
      expect(savedDocs[0].entsorgerFilepath).toEqual({
        logoPath: [],
        zertifikatePath: [],
        genehmigungenPath: [],
      });
      expect(savedDocs[0].save).toHaveBeenCalled();
    });
  });

  describe("Lesen", () => {
    it("liefert nur aktivierte Entsorger ohne interne Felder", async () => {
      const chain = query([entsorgerDoc()]);
      entsorgerModel.find.mockReturnValue(chain);

      await service.findAll();

      expect(entsorgerModel.find).toHaveBeenCalledWith({ isActivated: true });
      expect(chain.select).toHaveBeenCalledWith(SELECT_FELDER);
    });

    it("anonymisiert private Entsorger", async () => {
      entsorgerModel.find.mockReturnValue(
        query([entsorgerDoc({ private: true })])
      );

      const [entsorger] = await service.findAll();

      expect(entsorger.firmendaten).toMatchObject({
        firmenadresse: "keine Angabe",
        telefonnummer: "keine Angabe",
        ansprechpartner: "keine Angabe",
      });
      expect(entsorger.entsorgerdaten).toEqual({
        ansprechpartner: "keine Angabe",
        email: "keine Angabe",
        telefonnummer: "keine Angabe",
      });
    });

    it("sucht unprotected zuerst über die Benutzer-ID und fällt auf die Entsorger-ID zurück", async () => {
      entsorgerModel.findOne
        .mockReturnValueOnce(query(null))
        .mockReturnValueOnce(query(entsorgerDoc()));

      const entsorger = await service.findOneUnprotected("id-1");

      expect(entsorgerModel.findOne).toHaveBeenNthCalledWith(1, {
        userid: "id-1",
      });
      expect(entsorgerModel.findOne).toHaveBeenNthCalledWith(2, {
        _id: "id-1",
      });
      expect(entsorger._id).toBe("entsorger-1");
    });

    it("paginiert über die aktivierten Entsorger", async () => {
      const chain = query([entsorgerDoc()]);
      entsorgerModel.find.mockReturnValue(chain);
      entsorgerModel.countDocuments.mockReturnValue(query(42));

      const result = await service.paginator({
        pageSize: 10,
        currentPage: 3,
      } as any);

      expect(chain.skip).toHaveBeenCalledWith(20);
      expect(chain.limit).toHaveBeenCalledWith(10);
      expect(result.totalEntsorger).toBe(42);
    });
  });

  describe("Filtern", () => {
    it("bildet Stadt/Bundesland/Postleitzahl auf die Firmendaten ab", async () => {
      await service.getNumberOfFilterEntsorger({
        entsorgerBeschreibung: { stadt: "München", besonderheiten: "keine" },
      } as any);

      const [builtQuery] = entsorgerModel.find.mock.calls[0];
      expect(builtQuery).toEqual({
        "firmendaten.stadt": "München",
        "entsorgerBeschreibung.besonderheiten": "keine",
      });
    });

    it("sucht AVV-Nummern per Präfix-Regex in der Zusammenfassung", async () => {
      await service.getNumberOfFilterEntsorger({
        entsorgerBeschreibung: { avv: ["17", "1701"] },
      } as any);

      const [builtQuery] = entsorgerModel.find.mock.calls[0];
      expect(builtQuery).toEqual({ avvZusammenfassung: { $in: [/^1701/i] } });
    });

    it("sucht Zertifikatsbestätigungen unscharf", async () => {
      await service.getNumberOfFilterEntsorger({
        entsorgerBeschreibung: { zertifikatsbestaetigungen: ["efb"] },
      } as any);

      const [builtQuery] = entsorgerModel.find.mock.calls[0];
      expect(
        builtQuery["entsorgerBeschreibung.zertifikatsbestaetigungen"]
      ).toEqual({ $in: [/efb/i] });
    });

    it("liefert bei filterAndPaginate ohne Treffer eine leere Struktur", async () => {
      const result: any = await service.filterAndPaginate({} as any, {
        pageSize: 10,
        currentPage: 1,
      } as any);

      expect(result).toMatchObject({
        entsorger: [],
        totalEntsorger: 0,
        numberOfEntsorger: 0,
      });
      expect(result.numberOfEntsorgerByBundesland).toHaveLength(16);
    });
  });

  describe("Statusänderungen", () => {
    it("update schreibt die Profildaten des angemeldeten Benutzers", async () => {
      const result = await service.update(benutzer, {
        firmendaten: { firmenname: "Neu" },
        entsorgerdaten: {},
        entsorgerBeschreibung: {},
        avv: [],
        avvZusammenfassung: [],
      } as any);

      expect(entsorgerModel.updateOne).toHaveBeenCalledWith(
        { userid: "benutzer-1" },
        {
          $set: {
            firmendaten: { firmenname: "Neu" },
            entsorgerdaten: {},
            entsorgerBeschreibung: {},
            avv: [],
            avvZusammenfassung: [],
          },
        }
      );
      expect(result).toEqual({ message: "Profil erfolgreich aktualisiert" });
    });

    it("übernimmt beim Aktivieren die Firmendaten des Benutzers", async () => {
      await service.changeIsActivatedStatusOfEntsorger(benutzer, true);

      expect(entsorgerModel.updateOne).toHaveBeenCalledWith(
        { userid: "benutzer-1" },
        {
          isActivated: true,
          "firmendaten.firmenname": "Muster GmbH",
          "firmendaten.firmenadresse": "Musterweg 1",
          "firmendaten.firmenwebseite": "https://example.com",
        }
      );
    });

    it("setzt den Privat-Status", async () => {
      await service.changePrivateStatusOfEntsorger(benutzer, true);

      expect(entsorgerModel.updateOne).toHaveBeenCalledWith(
        { userid: "benutzer-1" },
        { private: true }
      );
    });
  });
});
