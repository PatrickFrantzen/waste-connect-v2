import { INestApplication, Injectable } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { Test } from "@nestjs/testing";
import { ExtractJwt, Strategy } from "passport-jwt";
import request from "supertest";
import { LogistikerController } from "./logistiker.controller";
import { LogistikerService } from "./logistiker.service";

const JWT_SECRET = "test-secret";
const BENUTZER_ID = "665f1c2b9d3e4a0012ab34cd";
const LOGISTIKER_ID = "665f1c2b9d3e4a0012ab9999";

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

describe("LogistikerController", () => {
  let app: INestApplication;
  let token: string;

  const logistikerService = {
    create: jest.fn().mockResolvedValue(undefined),
    findAll: jest.fn().mockResolvedValue([{ _id: LOGISTIKER_ID }]),
    findOneProtected: jest.fn().mockResolvedValue({ _id: LOGISTIKER_ID }),
    update: jest.fn().mockResolvedValue({ message: "aktualisiert" }),
    remove: jest.fn().mockResolvedValue({ message: "gelöscht" }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({ secret: JWT_SECRET }),
      ],
      controllers: [LogistikerController],
      providers: [
        TestJwtStrategy,
        { provide: LogistikerService, useValue: logistikerService },
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

  it("legt das Logistikerprofil für den Benutzer aus dem Token an", async () => {
    await auth(request(app.getHttpServer()).post("/logistiker")).expect(201);

    expect(logistikerService.create).toHaveBeenCalledWith(BENUTZER_ID);
  });

  it("liefert das eigene Profil über die Benutzer-ID, nicht über die Logistiker-ID", async () => {
    const response = await auth(
      request(app.getHttpServer()).get("/logistiker")
    ).expect(200);

    expect(logistikerService.findOneProtected).toHaveBeenCalledWith(
      BENUTZER_ID
    );
    expect(response.body).toEqual({ _id: LOGISTIKER_ID });
  });

  it("bedient /logistiker/all nicht über die Profilroute", async () => {
    await auth(request(app.getHttpServer()).get("/logistiker/all")).expect(200);

    expect(logistikerService.findAll).toHaveBeenCalled();
    expect(logistikerService.findOneProtected).not.toHaveBeenCalled();
  });

  it("aktualisiert das Profil mit Benutzer und Body", async () => {
    const dto = { logistikerBeschreibung: { firmenname: "Fuhrpark GmbH" } };

    await auth(request(app.getHttpServer()).patch("/logistiker"))
      .send(dto)
      .expect(200);

    expect(logistikerService.update).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID }),
      expect.objectContaining(dto)
    );
  });

  it("reicht die ID beim Löschen unverändert als String weiter", async () => {
    await auth(
      request(app.getHttpServer()).delete(`/logistiker/${LOGISTIKER_ID}`)
    ).expect(200);

    expect(logistikerService.remove).toHaveBeenCalledWith(LOGISTIKER_ID);
  });

  it.each([
    ["post", "/logistiker"],
    ["get", "/logistiker"],
    ["patch", "/logistiker"],
    ["delete", `/logistiker/${LOGISTIKER_ID}`],
  ])("verweigert %s %s ohne gültigen Token", async (methode, pfad) => {
    await request(app.getHttpServer())[methode](pfad).expect(401);

    expect(logistikerService.create).not.toHaveBeenCalled();
    expect(logistikerService.update).not.toHaveBeenCalled();
    expect(logistikerService.remove).not.toHaveBeenCalled();
  });
});
