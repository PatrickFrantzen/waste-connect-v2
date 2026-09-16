import { INestApplication, Injectable } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { Test } from "@nestjs/testing";
import { ExtractJwt, Strategy } from "passport-jwt";
import request from "supertest";
import { BenutzerController } from "./benutzer.controller";
import { BenutzerService } from "./benutzer.service";

const JWT_SECRET = "test-secret";
const BENUTZER_ID = "665f1c2b9d3e4a0012ab34cd";
const INSERAT_ID = "665f1c2b9d3e4a0012ab9999";

/** Wie in entsorger.controller.spec.ts: Benutzer kommt direkt aus dem Token. */
@Injectable()
class TestJwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: { _id: string }) {
    return payload;
  }
}

describe("BenutzerController", () => {
  let app: INestApplication;
  let token: string;

  const benutzerService = {
    getFirmendaten: jest.fn().mockResolvedValue({ firmenname: "Beispiel" }),
    getMerkzettel: jest.fn().mockResolvedValue([]),
    getMessagesByStatusForPaginator: jest
      .fn()
      .mockResolvedValue({ nachrichten: [], numberOfNachrichten: 0 }),
    checkMerkzettel: jest.fn().mockResolvedValue(true),
    update: jest.fn().mockResolvedValue({ message: "ok" }),
    updateLetzteSuche: jest.fn().mockResolvedValue(undefined),
    updateLetzteSucheEntsorger: jest.fn().mockResolvedValue(undefined),
    updateMerkzettel: jest.fn().mockResolvedValue({ message: "ok" }),
    remove: jest.fn().mockResolvedValue("Dein Account wurde gelöscht."),
    removeFromMerkzettel: jest.fn().mockResolvedValue({ message: "ok" }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({ secret: JWT_SECRET }),
      ],
      controllers: [BenutzerController],
      providers: [
        TestJwtStrategy,
        { provide: BenutzerService, useValue: benutzerService },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    token = app.get(JwtService).sign({ _id: BENUTZER_ID });
  });

  afterAll(async () => {
    await app?.close();
  });

  beforeEach(() => jest.clearAllMocks());

  const auth = (req: request.Test) =>
    req.set("Authorization", `Bearer ${token}`);

  describe("Zugriffsschutz", () => {
    it.each([
      ["get", "/benutzer/firmendaten"],
      ["get", "/benutzer/merkzettel"],
      ["patch", "/benutzer/updateMerkzettel"],
      ["delete", "/benutzer"],
    ])("verweigert %s %s ohne gültigen Token", async (methode, pfad) => {
      await request(app.getHttpServer())[methode](pfad).expect(401);
      expect(benutzerService.getFirmendaten).not.toHaveBeenCalled();
      expect(benutzerService.remove).not.toHaveBeenCalled();
    });
  });

  it("liefert die Firmendaten des angemeldeten Benutzers", async () => {
    const response = await auth(
      request(app.getHttpServer()).get("/benutzer/firmendaten")
    ).expect(200);

    expect(benutzerService.getFirmendaten).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID })
    );
    expect(response.body).toEqual({ firmenname: "Beispiel" });
  });

  it("reicht die Inserat-ID der Merkzettel-Prüfung als Query-Parameter weiter", async () => {
    await auth(
      request(app.getHttpServer()).get(
        `/benutzer/checkMerkzettel?inseratId=${INSERAT_ID}`
      )
    ).expect(200);

    expect(benutzerService.checkMerkzettel).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID }),
      INSERAT_ID
    );
  });

  it("übergibt den Paginator als geparstes Objekt an den Service", async () => {
    const paginator = { pageSize: 5, currentPage: 2 };

    await auth(
      request(app.getHttpServer())
        .get("/benutzer/getMessagesByStatusForPaginator")
        .query({ status: "gesendete", paginatorDto: JSON.stringify(paginator) })
    ).expect(200);

    expect(benutzerService.getMessagesByStatusForPaginator).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID }),
      "gesendete",
      paginator
    );
  });

  it("beantwortet einen kaputten Paginator-Parameter mit 400 statt mit 500", async () => {
    await auth(
      request(app.getHttpServer())
        .get("/benutzer/getMessagesByStatusForPaginator")
        .query({ status: "gesendete", paginatorDto: "{kein json" })
    ).expect(400);

    expect(benutzerService.getMessagesByStatusForPaginator).not.toHaveBeenCalled();
  });

  it("nimmt den Inseratfilter aus dem Body-Feld inseratfilter entgegen", async () => {
    const filter = { stadt: "Köln" };

    await auth(
      request(app.getHttpServer()).patch("/benutzer/updateInseratfilter")
    )
      .send({ inseratfilter: filter })
      .expect(200);

    expect(benutzerService.updateLetzteSuche).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID }),
      filter
    );
  });

  it("nimmt den Entsorgerfilter aus dem Body-Feld entsorgerfilter entgegen", async () => {
    const filter = { bundesland: "NRW" };

    await auth(
      request(app.getHttpServer()).patch("/benutzer/updateEntsorgerfilter")
    )
      .send({ entsorgerfilter: filter })
      .expect(200);

    expect(benutzerService.updateLetzteSucheEntsorger).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID }),
      filter
    );
  });

  it("löscht den Account des Benutzers aus dem Token, nicht aus dem Body", async () => {
    await auth(request(app.getHttpServer()).delete("/benutzer"))
      .send({ _id: "665f1c2b9d3e4a0012abffff" })
      .expect(200);

    expect(benutzerService.remove).toHaveBeenCalledWith(BENUTZER_ID);
  });

  it("entfernt einen Merkzettel-Eintrag über das Body-Feld inseratid", async () => {
    await auth(
      request(app.getHttpServer()).delete("/benutzer/removeFromMerkzettel")
    )
      .send({ inseratid: INSERAT_ID })
      .expect(200);

    expect(benutzerService.removeFromMerkzettel).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID }),
      INSERAT_ID
    );
  });
});
