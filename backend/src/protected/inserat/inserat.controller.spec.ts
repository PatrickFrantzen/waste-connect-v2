import { INestApplication, Injectable } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { Test } from "@nestjs/testing";
import { ExtractJwt, Strategy } from "passport-jwt";
import * as request from "supertest";
import { InseratController } from "./inserat.controller";
import { InseratService } from "./inserat.service";

const JWT_SECRET = "test-secret";
const BENUTZER_ID = "665f1c2b9d3e4a0012ab34cd";
const INSERAT_ID = "665f1c2b9d3e4a0012ab9999";

/** Wie in admin.guard.routes.spec.ts: Benutzer kommt direkt aus dem Token. */
@Injectable()
class TestJwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: { _id: string; isAdmin?: boolean }) {
    return payload;
  }
}

describe("InseratController", () => {
  let app: INestApplication;
  let token: string;
  let adminToken: string;

  const inseratService = {
    create: jest.fn().mockResolvedValue({ message: "angelegt" }),
    findAll: jest.fn().mockResolvedValue([{ _id: INSERAT_ID }]),
    myInserate: jest.fn().mockResolvedValue([]),
    getAllInserateForAdminPanel: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue({ _id: INSERAT_ID }),
    update: jest.fn().mockResolvedValue({ message: "aktualisiert" }),
    adminDeleteInserat: jest.fn().mockResolvedValue({ message: "gelöscht" }),
    remove: jest.fn().mockResolvedValue({ message: "gelöscht" }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({ secret: JWT_SECRET }),
      ],
      controllers: [InseratController],
      providers: [
        TestJwtStrategy,
        { provide: InseratService, useValue: inseratService },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    const jwt = app.get(JwtService);
    token = jwt.sign({ _id: BENUTZER_ID, isAdmin: false });
    adminToken = jwt.sign({ _id: BENUTZER_ID, isAdmin: true });
  });

  afterAll(async () => {
    await app?.close();
  });

  beforeEach(() => jest.clearAllMocks());

  const auth = (req: request.Test) =>
    req.set("Authorization", `Bearer ${token}`);

  it("legt ein Inserat für den Benutzer aus dem Token an", async () => {
    const dto = { inseratBeschreibung: { abfallbezeichnung: "Altholz" } };

    const response = await auth(request(app.getHttpServer()).post("/inserat"))
      .send(dto)
      .expect(201);

    expect(inseratService.create).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID }),
      expect.objectContaining(dto)
    );
    expect(response.body).toEqual({ message: "angelegt" });
  });

  it("verweigert jeden Zugriff ohne gültigen Token", async () => {
    await request(app.getHttpServer()).get("/inserat/all").expect(401);
    await request(app.getHttpServer()).post("/inserat").expect(401);
    await request(app.getHttpServer())
      .delete(`/inserat/${INSERAT_ID}`)
      .expect(401);

    expect(inseratService.findAll).not.toHaveBeenCalled();
    expect(inseratService.remove).not.toHaveBeenCalled();
  });

  it("liefert die eigenen Inserate anhand des Benutzers aus dem Token", async () => {
    await auth(request(app.getHttpServer()).get("/inserat/userInserate")).expect(
      200
    );

    expect(inseratService.myInserate).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID })
    );
  });

  it("reicht die ID beim Lesen und Aktualisieren unverändert als String weiter", async () => {
    await auth(request(app.getHttpServer()).get(`/inserat/${INSERAT_ID}`)).expect(
      200
    );
    await auth(request(app.getHttpServer()).patch(`/inserat/${INSERAT_ID}`))
      .send({ inseratBeschreibung: { abfallbezeichnung: "Altpapier" } })
      .expect(200);

    expect(inseratService.findOne).toHaveBeenCalledWith(INSERAT_ID);
    expect(inseratService.update).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID }),
      INSERAT_ID,
      expect.objectContaining({
        inseratBeschreibung: { abfallbezeichnung: "Altpapier" },
      })
    );
  });

  it("löscht ein eigenes Inserat mit Benutzer und ID", async () => {
    await auth(
      request(app.getHttpServer()).delete(`/inserat/${INSERAT_ID}`)
    ).expect(200);

    expect(inseratService.remove).toHaveBeenCalledWith(
      expect.objectContaining({ _id: BENUTZER_ID }),
      INSERAT_ID
    );
    expect(inseratService.adminDeleteInserat).not.toHaveBeenCalled();
  });

  describe("Admin-Routen vor den generischen :id-Routen", () => {
    it("bedient /inserat/adminInserate nicht über findOne", async () => {
      await request(app.getHttpServer())
        .get("/inserat/adminInserate")
        .set("Authorization", `Bearer ${adminToken}`)
        .expect(200);

      expect(inseratService.getAllInserateForAdminPanel).toHaveBeenCalled();
      expect(inseratService.findOne).not.toHaveBeenCalled();
    });

    it("bedient /inserat/adminDeleteInserat/:id nicht über remove", async () => {
      await request(app.getHttpServer())
        .delete(`/inserat/adminDeleteInserat/${INSERAT_ID}`)
        .set("Authorization", `Bearer ${adminToken}`)
        .expect(200);

      expect(inseratService.adminDeleteInserat).toHaveBeenCalledWith(
        INSERAT_ID
      );
      expect(inseratService.remove).not.toHaveBeenCalled();
    });

    it("verweigert die Admin-Routen einem normalen Benutzer mit 403", async () => {
      await auth(
        request(app.getHttpServer()).get("/inserat/adminInserate")
      ).expect(403);

      expect(inseratService.getAllInserateForAdminPanel).not.toHaveBeenCalled();
    });
  });
});
