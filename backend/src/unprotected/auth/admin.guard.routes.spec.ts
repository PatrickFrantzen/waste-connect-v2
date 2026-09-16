import { INestApplication, Injectable } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { Test } from "@nestjs/testing";
import { ExtractJwt, Strategy } from "passport-jwt";
import request from "supertest";
import { InseratController } from "src/protected/inserat/inserat.controller";
import { InseratService } from "src/protected/inserat/inserat.service";
import { OfTheDayCalendarController } from "src/protected/of-the-day-calendar/of-the-day-calendar.controller";
import { OfTheDayCalendarService } from "src/protected/of-the-day-calendar/of-the-day-calendar.service";
import { WasteOfTheDayService } from "src/protected/of-the-day-calendar/waste-of-the-day.service";

const JWT_SECRET = "test-secret";

/**
 * Ersetzt die echte JwtStrategy: liest denselben Bearer-Token, hängt aber den
 * Benutzer direkt aus dem Payload an den Request, statt ihn in MongoDB zu
 * suchen. Der Guard-Verhalten selbst bleibt dadurch unverändert testbar.
 */
@Injectable()
class TestJwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: { _id: string; isAdmin: boolean }) {
    return payload;
  }
}

/** Route-Paare: nur die bisher inline admin-geprüften Endpunkte. */
const adminRoutes = [
  { method: "get" as const, path: "/inserat/adminInserate" },
  { method: "delete" as const, path: "/inserat/adminDeleteInserat/abc123" },
  {
    method: "get" as const,
    path: "/of-the-day-calendar/getWasteOfTheDayReservations",
  },
  {
    method: "patch" as const,
    path: "/of-the-day-calendar/updateWasteReservation/abc123",
  },
  {
    method: "delete" as const,
    path: "/of-the-day-calendar/deleteWasteOfTheDayReservations/abc123",
  },
  // Kalendereinträge sind laut CONTEXT.md ("Kalender-Verwaltung") administrativ:
  // die generischen :id-Routen werden deshalb ebenfalls admin-geschützt.
  { method: "patch" as const, path: "/of-the-day-calendar/abc123" },
  { method: "delete" as const, path: "/of-the-day-calendar/abc123" },
];

describe("Admin-geschützte Endpunkte", () => {
  let app: INestApplication;
  let adminToken: string;
  let benutzerToken: string;

  const inseratService = {
    getAllInserateForAdminPanel: jest.fn().mockResolvedValue([]),
    adminDeleteInserat: jest.fn().mockResolvedValue({ message: "ok" }),
  };
  const calendarService = {
    getAllReservedDays: jest.fn().mockResolvedValue([]),
    updateWasteReservation: jest.fn().mockResolvedValue({ message: "ok" }),
    deleteWasteReservation: jest.fn().mockResolvedValue({ message: "ok" }),
    update: jest.fn().mockResolvedValue({ message: "ok" }),
    remove: jest.fn().mockResolvedValue({ message: "ok" }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({ secret: JWT_SECRET }),
      ],
      controllers: [InseratController, OfTheDayCalendarController],
      providers: [
        TestJwtStrategy,
        { provide: InseratService, useValue: inseratService },
        { provide: OfTheDayCalendarService, useValue: calendarService },
        {
          provide: WasteOfTheDayService,
          useValue: {
            getWasteOfTheDay: jest.fn().mockResolvedValue({}),
            getEntsorgerOfTheDay: jest.fn().mockResolvedValue(""),
          },
        },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    const jwt = app.get(JwtService);
    adminToken = jwt.sign({ _id: "admin-id", isAdmin: true });
    benutzerToken = jwt.sign({ _id: "benutzer-id", isAdmin: false });
  });

  afterAll(async () => {
    await app?.close();
  });

  describe.each(adminRoutes)("$method $path", ({ method, path }) => {
    it("erlaubt den Zugriff mit Admin-Rolle", async () => {
      await request(app.getHttpServer())
        [method](path)
        .set("Authorization", `Bearer ${adminToken}`)
        .expect((res) => {
          expect(res.status).toBeLessThan(400);
        });
    });

    it("verweigert den Zugriff ohne Admin-Rolle mit 403", async () => {
      await request(app.getHttpServer())
        [method](path)
        .set("Authorization", `Bearer ${benutzerToken}`)
        .expect(403);
    });

    it("verweigert den Zugriff ohne gültigen Token mit 401", async () => {
      await request(app.getHttpServer())[method](path).expect(401);

      await request(app.getHttpServer())
        [method](path)
        .set("Authorization", "Bearer kein-gueltiger-token")
        .expect(401);
    });
  });

  it("ruft den Service bei fehlender Admin-Rolle gar nicht erst auf", async () => {
    jest.clearAllMocks();

    await request(app.getHttpServer())
      .get("/inserat/adminInserate")
      .set("Authorization", `Bearer ${benutzerToken}`)
      .expect(403);

    expect(inseratService.getAllInserateForAdminPanel).not.toHaveBeenCalled();
  });
});
