import { getModelToken } from "@nestjs/mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { ObjectId } from "mongodb";
import { EntsorgerService } from "src/protected/entsorger/entsorger.service";
import { InseratNEST } from "src/schemas/inserat.schema";
import { Benutzer } from "src/schemas/user.schema";
import { LogistikerService } from "../logistiker/logistiker.service";
import { BenutzerService } from "./benutzer.service";
import { UpdateBenutzerDto } from "./dto/update-benutzer.dto";

const BENUTZER_ID = "665f1c2b9d3e4a0012ab34cd";
const INSERAT_ID = "665f1c2b9d3e4a0012ab9999";

const nachricht = (nr: number, status: string) => ({
  subject: `Betreff ${nr}`,
  message: `Nachricht ${nr}`,
  status,
  date: "01.01.2026",
});

const benutzer = (overrides: Record<string, any> = {}) =>
  ({
    _id: BENUTZER_ID,
    email: "benutzer@example.org",
    privateModus: false,
    firmendaten: { firmenname: "Beispiel GmbH" },
    profile: { entsorger: true, logistik: false },
    benutzerinteraktionen: {
      merkzettel: [],
      letzteSuche: [{ stadt: "Köln" }],
    },
    messages: {
      gesendeteNachrichten: [],
      numberOfGesendeteNachrichten: 0,
      empfangeneNachrichten: [],
      numberOfEmpfangeneNachrichten: 0,
    },
    ...overrides,
  }) as unknown as Benutzer;

describe("BenutzerService", () => {
  let service: BenutzerService;

  const benutzerModel = {
    updateOne: jest.fn().mockResolvedValue({ modifiedCount: 1 }),
    findOne: jest.fn(),
    findOneAndUpdate: jest.fn().mockResolvedValue(undefined),
    deleteOne: jest.fn().mockResolvedValue({ deletedCount: 1 }),
  };
  const inseratModel = {
    updateMany: jest.fn().mockResolvedValue({ modifiedCount: 3 }),
    findOne: jest.fn(),
  };
  const entsorgerService = {
    changeIsActivatedStatusOfEntsorger: jest.fn(),
    changePrivateStatusOfEntsorger: jest.fn(),
  };
  const logistikerService = {
    changeIsActivatedStatusOfLogistiker: jest.fn(),
    changePrivateStatusOfLogistiker: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    benutzerModel.updateOne.mockReturnValue({
      exec: jest.fn().mockResolvedValue({ modifiedCount: 1 }),
    });

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BenutzerService,
        { provide: getModelToken(Benutzer.name), useValue: benutzerModel },
        { provide: getModelToken(InseratNEST.name), useValue: inseratModel },
        { provide: EntsorgerService, useValue: entsorgerService },
        { provide: LogistikerService, useValue: logistikerService },
      ],
    }).compile();

    service = module.get<BenutzerService>(BenutzerService);
  });

  describe("Lesen aus dem Token-Benutzer", () => {
    it("liefert die Profilabschnitte direkt aus dem angemeldeten Benutzer", async () => {
      const user = benutzer();

      await expect(service.getFirmendaten(user)).resolves.toEqual({
        firmenname: "Beispiel GmbH",
      });
      await expect(service.getProfile(user)).resolves.toEqual({
        entsorger: true,
        logistik: false,
      });
      await expect(service.getPrivate(user)).resolves.toBe(false);
      await expect(service.getLetzteSucheInserat(user)).resolves.toEqual([
        { stadt: "Köln" },
      ]);
      // Reine Lesezugriffe dürfen die Datenbank nicht anfassen.
      expect(benutzerModel.findOne).not.toHaveBeenCalled();
    });

    it("erkennt, ob ein Inserat auf dem Merkzettel liegt", async () => {
      const user = benutzer({
        benutzerinteraktionen: {
          merkzettel: [{ _id: new ObjectId(INSERAT_ID) }],
        },
      });

      await expect(service.checkMerkzettel(user, INSERAT_ID)).resolves.toBe(
        true
      );
      await expect(
        service.checkMerkzettel(user, "665f1c2b9d3e4a0012ab0000")
      ).resolves.toBe(false);
    });
  });

  describe("Nachrichten", () => {
    const user = benutzer({
      messages: {
        gesendeteNachrichten: Array.from({ length: 12 }, (_, i) =>
          nachricht(i + 1, "gesendet")
        ),
        numberOfGesendeteNachrichten: 12,
        empfangeneNachrichten: Array.from({ length: 3 }, (_, i) =>
          nachricht(i + 1, "empfangen")
        ),
        numberOfEmpfangeneNachrichten: 3,
      },
    });

    it("liefert für die Übersicht die letzten zehn Nachrichten je Richtung", async () => {
      const result = await service.getMessages(user);

      expect(result.getLastTenGesendeteNachrichten).toHaveLength(10);
      expect(result.getLastTenGesendeteNachrichten[0].subject).toBe(
        "Betreff 3"
      );
      expect(result.numberOfGesendeteNachrichten).toBe(12);
      expect(result.getLastTenEmpfangeneNachrichten).toHaveLength(3);
      expect(result.numberOfEmpfangeneNachrichten).toBe(3);
    });

    it("liefert die Seite des Paginators in umgekehrter Reihenfolge", async () => {
      const result = await service.getMessagesByStatusForPaginator(
        user,
        "gesendete",
        { pageSize: 5, currentPage: 2 } as any
      );

      // Seite 2 = Einträge 6..10, neueste zuerst.
      expect(result.nachrichten.map((n) => n.subject)).toEqual([
        "Betreff 10",
        "Betreff 9",
        "Betreff 8",
        "Betreff 7",
        "Betreff 6",
      ]);
      expect(result.numberOfNachrichten).toBe(12);
    });

    it("liefert für eine Seite hinter dem Ende eine leere Liste statt eines Fehlers", async () => {
      const result = await service.getMessagesByStatusForPaginator(
        user,
        "empfangene",
        { pageSize: 5, currentPage: 3 } as any
      );

      expect(result.nachrichten).toEqual([]);
      expect(result.numberOfNachrichten).toBe(3);
    });
  });

  describe("update", () => {
    const dto = {
      firmendaten: { firmenname: "Neu GmbH" },
      privateModus: true,
      benutzerinteraktionen: { merkzettel: [] },
      profile: { entsorger: true, logistik: true },
      benutzerdaten: { firstLogin: false },
      messages: { gesendeteNachrichten: [] },
    } as unknown as UpdateBenutzerDto;

    it("schreibt die Profildaten und zieht den Privat-Modus in Inserate und Profile nach", async () => {
      const user = benutzer();

      const result = await service.update(user, dto);

      expect(benutzerModel.updateOne).toHaveBeenCalledWith(
        { _id: BENUTZER_ID },
        {
          $set: expect.objectContaining({
            firmendaten: dto.firmendaten,
            privateModus: true,
            "benutzerdaten.firstLogin": false,
          }),
        }
      );
      expect(inseratModel.updateMany).toHaveBeenCalledWith(
        { user: BENUTZER_ID },
        { $set: { "inseratErsteller.privateModus": true } }
      );
      expect(
        entsorgerService.changeIsActivatedStatusOfEntsorger
      ).toHaveBeenCalledWith(user, true);
      expect(
        logistikerService.changeIsActivatedStatusOfLogistiker
      ).toHaveBeenCalledWith(user, true);
      expect(
        entsorgerService.changePrivateStatusOfEntsorger
      ).toHaveBeenCalledWith(user, true);
      expect(
        logistikerService.changePrivateStatusOfLogistiker
      ).toHaveBeenCalledWith(user, true);
      expect(result).toEqual({ message: "Deine Daten wurden aktualisiert." });
    });
  });

  describe("letzte Suche", () => {
    it("hängt eine Suche an und behält nur die letzten fünf", async () => {
      const suche = { stadt: "Köln" } as any;

      await service.updateLetzteSuche(benutzer(), suche);

      expect(benutzerModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: BENUTZER_ID },
        {
          $push: {
            "benutzerinteraktionen.letzteSuche": {
              $each: [suche],
              $slice: -5,
            },
          },
        }
      );
    });

    it("speichert eine komplett leere Suche gar nicht erst", async () => {
      await service.updateLetzteSuche(benutzer(), {
        stadt: "",
        bundesland: null,
      } as any);
      await service.updateLetzteSuche(benutzer(), undefined as any);

      expect(benutzerModel.findOneAndUpdate).not.toHaveBeenCalled();
    });
  });

  describe("Merkzettel", () => {
    it("nimmt ein neues Inserat auf den Merkzettel", async () => {
      const inserat = { _id: INSERAT_ID };
      inseratModel.findOne.mockResolvedValue(inserat);
      benutzerModel.findOne.mockResolvedValue(
        benutzer({ benutzerinteraktionen: { merkzettel: [] } })
      );

      const result = await service.updateMerkzettel(benutzer(), INSERAT_ID);

      expect(benutzerModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: BENUTZER_ID },
        { $push: { "benutzerinteraktionen.merkzettel": inserat } }
      );
      expect(result).toEqual({
        message: "Das Inserat wurde zum Merkzettel hinzugefügt.",
      });
    });

    it("entfernt ein bereits gemerktes Inserat wieder", async () => {
      inseratModel.findOne.mockResolvedValue({ _id: INSERAT_ID });
      benutzerModel.findOne.mockResolvedValue(
        benutzer({
          benutzerinteraktionen: {
            merkzettel: [{ _id: new ObjectId(INSERAT_ID) }],
          },
        })
      );

      const result = await service.updateMerkzettel(benutzer(), INSERAT_ID);

      expect(benutzerModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: BENUTZER_ID },
        {
          $pull: {
            "benutzerinteraktionen.merkzettel": {
              _id: new ObjectId(INSERAT_ID),
            },
          },
        }
      );
      expect(result).toEqual({
        message: "Das Inserat wurde vom Merkzettel entfernt.",
      });
    });

    it("entfernt gezielt über removeFromMerkzettel", async () => {
      const user = benutzer({
        benutzerinteraktionen: { merkzettel: [{ _id: INSERAT_ID }] },
      });

      const result = await service.removeFromMerkzettel(user, INSERAT_ID);

      expect(benutzerModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: BENUTZER_ID },
        {
          $pull: {
            "benutzerinteraktionen.merkzettel": { _id: INSERAT_ID },
          },
        },
        { new: true }
      );
      expect(result).toEqual({
        message: "Das Inserat wurde vom Merkzettel entfernt.",
        merkzettel: [{ _id: INSERAT_ID }],
      });
    });
  });

  describe("Standortfavoriten und Löschen", () => {
    it("legt einen Standortfavoriten duplikatfrei ab", () => {
      service.updateStandortToStandortFavorit(benutzer(), {
        standort_Bundesland: "NRW",
        standort_Gemeinde: "Köln",
        standort_Postleitzahl: "50667",
      } as any);

      expect(benutzerModel.updateOne).toHaveBeenCalledWith(
        { _id: BENUTZER_ID },
        {
          $addToSet: {
            "firmendaten.standortFavoriten": {
              bundesland: "NRW",
              stadt: "Köln",
              postleitzahl: "50667",
            },
          },
        }
      );
    });

    it("löscht den Account des Benutzers", async () => {
      const result = await service.remove(BENUTZER_ID);

      expect(benutzerModel.deleteOne).toHaveBeenCalledWith({
        _id: BENUTZER_ID,
      });
      expect(result).toBe("Dein Account wurde gelöscht.");
    });
  });
});
