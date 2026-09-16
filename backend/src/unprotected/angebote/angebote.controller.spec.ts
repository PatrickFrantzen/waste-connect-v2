import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import request from "supertest";
import { EntsorgerDateienService } from "src/protected/entsorger/entsorger-dateien.service";
import { EntsorgerStatistikService } from "src/protected/entsorger/entsorger-statistik.service";
import { EntsorgerService } from "src/protected/entsorger/entsorger.service";
import { InseratDateienService } from "src/protected/inserat/inserat-dateien.service";
import { InseratStatistikService } from "src/protected/inserat/inserat-statistik.service";
import { InseratService } from "src/protected/inserat/inserat.service";
import { LogistikerService } from "src/protected/logistiker/logistiker.service";
import { AngeboteController } from "./angebote.controller";
import { AngeboteService } from "./angebote.service";

const ID = "665f1c2b9d3e4a0012ab34cd";

describe("AngeboteController", () => {
  let app: INestApplication;

  const inseratService = {
    findAll: jest.fn().mockResolvedValue([{ _id: ID }]),
    findOne: jest.fn().mockResolvedValue({ _id: ID }),
    paginator: jest.fn().mockResolvedValue({ inserate: [] }),
    filterAndPaginate: jest.fn().mockResolvedValue({ inserate: [] }),
  };
  const entsorgerService = {
    findAll: jest.fn().mockResolvedValue([]),
    findOneUnprotected: jest.fn().mockResolvedValue({ _id: ID }),
    filterAndPaginate: jest.fn().mockResolvedValue({ entsorger: [] }),
  };
  const logistikerService = {
    findAll: jest.fn().mockResolvedValue([]),
    findOneUnprotected: jest.fn().mockResolvedValue({ _id: ID }),
  };
  const inseratStatistikService = {
    getBundeslaenderAnzahl: jest.fn().mockResolvedValue({ NRW: 3 }),
    getGemeindenForBundesland: jest.fn().mockResolvedValue(["Köln"]),
  };
  const entsorgerStatistikService = {
    getGemeindenForBundesland: jest.fn().mockResolvedValue(["Bonn"]),
  };
  const inseratDateienService = { getAnalyse: jest.fn() };
  const entsorgerDateienService = { getZertifikat: jest.fn() };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AngeboteController],
      providers: [
        { provide: AngeboteService, useValue: {} },
        { provide: InseratService, useValue: inseratService },
        { provide: InseratDateienService, useValue: inseratDateienService },
        { provide: InseratStatistikService, useValue: inseratStatistikService },
        { provide: EntsorgerService, useValue: entsorgerService },
        { provide: EntsorgerDateienService, useValue: entsorgerDateienService },
        {
          provide: EntsorgerStatistikService,
          useValue: entsorgerStatistikService,
        },
        { provide: LogistikerService, useValue: logistikerService },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app?.close();
  });

  beforeEach(() => jest.clearAllMocks());

  describe("öffentliche Listen", () => {
    it("liefert alle Inserate ohne Anmeldung", async () => {
      const response = await request(app.getHttpServer())
        .get("/angebote/allInserate")
        .expect(200);

      expect(inseratService.findAll).toHaveBeenCalled();
      expect(response.body).toEqual([{ _id: ID }]);
    });

    it("liefert Logistiker über den eigenen Service", async () => {
      await request(app.getHttpServer())
        .get("/angebote/allLogistiker")
        .expect(200);

      expect(logistikerService.findAll).toHaveBeenCalled();
      expect(inseratService.findAll).not.toHaveBeenCalled();
    });
  });

  describe("Einzelabruf", () => {
    it("reicht die ID beim Inserat unverändert als String weiter", async () => {
      await request(app.getHttpServer())
        .get(`/angebote/inserat/${ID}`)
        .expect(200);

      expect(inseratService.findOne).toHaveBeenCalledWith(ID);
    });

    it("nutzt für Entsorger die unprotected-Variante ohne interne Felder", async () => {
      await request(app.getHttpServer())
        .get(`/angebote/entsorger/${ID}`)
        .expect(200);

      expect(entsorgerService.findOneUnprotected).toHaveBeenCalledWith(ID);
    });
  });

  describe("Filter und Paginator im Query-String", () => {
    it("übergibt Paginator und Filter als geparste Objekte", async () => {
      const paginator = { pageSize: 10, currentPage: 1 };
      const filter = { inseratBeschreibung: { abfallbezeichnung: "Altholz" } };

      await request(app.getHttpServer())
        .get("/angebote/filterAndPaginator")
        .query({
          paginatorDto: JSON.stringify(paginator),
          filterInseratDto: JSON.stringify(filter),
        })
        .expect(200);

      expect(inseratService.filterAndPaginate).toHaveBeenCalledWith(
        filter,
        paginator
      );
    });

    it("beantwortet kaputtes JSON im Query-String mit 400 statt mit 500", async () => {
      await request(app.getHttpServer())
        .get("/angebote/filterAndPaginator")
        .query({ paginatorDto: "{kein json", filterInseratDto: "{}" })
        .expect(400);

      expect(inseratService.filterAndPaginate).not.toHaveBeenCalled();
    });

    it("beantwortet kaputtes JSON auch beim Entsorger-Paginator mit 400", async () => {
      await request(app.getHttpServer())
        .get("/angebote/filterAndPaginatorEntsorger")
        .query({ paginatorDto: "{}", filterEntsorgerDto: "[[" })
        .expect(400);

      expect(entsorgerService.filterAndPaginate).not.toHaveBeenCalled();
    });
  });

  describe("Statistik", () => {
    it("trennt Inserat- und Entsorger-Gemeinden nach Service", async () => {
      await request(app.getHttpServer())
        .get("/angebote/getGemeindenForBundesland")
        .query({ bundesland: "NRW" })
        .expect(200);
      await request(app.getHttpServer())
        .get("/angebote/getEntsorgerGemeindenForBundesland")
        .query({ bundesland: "NRW" })
        .expect(200);

      expect(
        inseratStatistikService.getGemeindenForBundesland
      ).toHaveBeenCalledWith("NRW");
      expect(
        entsorgerStatistikService.getGemeindenForBundesland
      ).toHaveBeenCalledWith("NRW");
    });
  });

  describe("Dateidownload", () => {
    it("reicht ID, Dateiname und Response-Objekt an den Dateien-Service weiter", async () => {
      inseratDateienService.getAnalyse.mockImplementation((_id, _name, res) =>
        res.status(200).send("datei")
      );

      await request(app.getHttpServer())
        .get(`/angebote/getAnalyse/${ID}`)
        .query({ analyse: "analyse.pdf" })
        .expect(200);

      expect(inseratDateienService.getAnalyse).toHaveBeenCalledWith(
        ID,
        "analyse.pdf",
        expect.anything()
      );
    });
  });
});
