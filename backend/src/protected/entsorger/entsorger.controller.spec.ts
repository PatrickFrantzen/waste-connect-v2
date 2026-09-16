import { INestApplication, Injectable } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { Test } from "@nestjs/testing";
import { ExtractJwt, Strategy } from "passport-jwt";
import * as request from "supertest";
import { EntsorgerController } from "./entsorger.controller";
import { EntsorgerService } from "./entsorger.service";

const JWT_SECRET = "test-secret";
const BENUTZER_ID = "665f1c2b9d3e4a0012ab34cd";

/** Wie in admin.guard.routes.spec.ts: Benutzer kommt direkt aus dem Token. */
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

describe("EntsorgerController", () => {
  let app: INestApplication;
  let token: string;

  const entsorgerService = {
    create: jest.fn().mockResolvedValue(undefined),
    remove: jest.fn().mockResolvedValue({ message: "ok" }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({ secret: JWT_SECRET }),
      ],
      controllers: [EntsorgerController],
      providers: [
        TestJwtStrategy,
        { provide: EntsorgerService, useValue: entsorgerService },
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

  it("legt das Entsorgerprofil für den authentifizierten Benutzer an", async () => {
    await request(app.getHttpServer())
      .post("/entsorger")
      .set("Authorization", `Bearer ${token}`)
      .expect(201);

    expect(entsorgerService.create).toHaveBeenCalledWith(BENUTZER_ID);
  });

  it("verweigert das Anlegen ohne gültigen Token", async () => {
    await request(app.getHttpServer()).post("/entsorger").expect(401);
    expect(entsorgerService.create).not.toHaveBeenCalled();
  });

  it("reicht die ObjectId beim Löschen unverändert als String weiter", async () => {
    await request(app.getHttpServer())
      .delete(`/entsorger/${BENUTZER_ID}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(200);

    expect(entsorgerService.remove).toHaveBeenCalledWith(BENUTZER_ID);
  });
});
