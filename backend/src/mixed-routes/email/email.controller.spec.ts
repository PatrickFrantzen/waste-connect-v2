import { INestApplication, Injectable } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { Test } from "@nestjs/testing";
import { ExtractJwt, Strategy } from "passport-jwt";
import * as request from "supertest";
import { EmailController } from "./email.controller";
import { EmailService } from "./email.service";

const JWT_SECRET = "test-secret";
const BENUTZER = { _id: "665f1c2b9d3e4a0012ab34cd", email: "user@example.org" };

/** Wie in entsorger.controller.spec.ts: Benutzer kommt direkt aus dem Token. */
@Injectable()
class TestJwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: typeof BENUTZER) {
    return payload;
  }
}

describe("EmailController", () => {
  let app: INestApplication;
  let token: string;

  const emailService = {
    getUserAndSendMail: jest.fn().mockResolvedValue({ message: "ok" }),
    getAnonymAndSendMail: jest.fn().mockResolvedValue({ message: "ok" }),
    getUserAndSendEntsorgerMail: jest.fn().mockResolvedValue({ message: "ok" }),
    getAnonymAndSendEntsorgerMail: jest
      .fn()
      .mockResolvedValue({ message: "ok" }),
    feedbackEmail: jest.fn().mockResolvedValue({ message: "ok" }),
    sendEmailToPrivateUser: jest.fn().mockResolvedValue("ok"),
  };

  const userBody = { betreff: "Anfrage", nachricht: "Hallo", ID: "inserat-id" };
  const anonymBody = { ...userBody, email: "anonym@example.org" };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({ secret: JWT_SECRET }),
      ],
      controllers: [EmailController],
      providers: [
        TestJwtStrategy,
        { provide: EmailService, useValue: emailService },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    token = app.get(JwtService).sign(BENUTZER);
  });

  afterAll(async () => {
    await app?.close();
  });

  beforeEach(() => jest.clearAllMocks());

  describe("Anschreiben eingeloggter Benutzer", () => {
    it("reicht Body und Benutzer aus dem Token an den Service weiter", async () => {
      const response = await request(app.getHttpServer())
        .post("/email/sendEmail")
        .set("Authorization", `Bearer ${token}`)
        .send(userBody)
        .expect(201);

      expect(emailService.getUserAndSendMail).toHaveBeenCalledWith(
        expect.objectContaining(userBody),
        expect.objectContaining(BENUTZER)
      );
      expect(response.body).toEqual({ message: "ok" });
    });

    it("verweigert das Anschreiben ohne gültigen Token", async () => {
      await request(app.getHttpServer())
        .post("/email/sendEmail")
        .send(userBody)
        .expect(401);

      expect(emailService.getUserAndSendMail).not.toHaveBeenCalled();
    });

    it("nutzt für Entsorger-Anschreiben den eigenen Service-Einstiegspunkt", async () => {
      await request(app.getHttpServer())
        .post("/email/sendEntsorgerEmail")
        .set("Authorization", `Bearer ${token}`)
        .send(userBody)
        .expect(201);

      expect(emailService.getUserAndSendEntsorgerMail).toHaveBeenCalledWith(
        expect.objectContaining(userBody),
        expect.objectContaining(BENUTZER)
      );
      expect(emailService.getUserAndSendMail).not.toHaveBeenCalled();
    });

    it("schickt Feedback mit Benutzer und Body an den Service", async () => {
      await request(app.getHttpServer())
        .post("/email/feedback")
        .set("Authorization", `Bearer ${token}`)
        .send(anonymBody)
        .expect(201);

      expect(emailService.feedbackEmail).toHaveBeenCalledWith(
        expect.objectContaining(BENUTZER),
        expect.objectContaining(anonymBody)
      );
    });

    it("verweigert Feedback ohne gültigen Token", async () => {
      await request(app.getHttpServer())
        .post("/email/feedback")
        .send(anonymBody)
        .expect(401);

      expect(emailService.feedbackEmail).not.toHaveBeenCalled();
    });
  });

  describe("Anschreiben ohne Anmeldung", () => {
    it("erlaubt anonyme Inserats-Anfragen ohne Token", async () => {
      const response = await request(app.getHttpServer())
        .post("/email/sendAnonymEmail")
        .send(anonymBody)
        .expect(201);

      expect(emailService.getAnonymAndSendMail).toHaveBeenCalledWith(
        expect.objectContaining(anonymBody)
      );
      expect(response.body).toEqual({ message: "ok" });
    });

    it("erlaubt anonyme Entsorger-Anfragen ohne Token", async () => {
      await request(app.getHttpServer())
        .post("/email/sendAnonymEntsorgerEmail")
        .send(anonymBody)
        .expect(201);

      expect(emailService.getAnonymAndSendEntsorgerMail).toHaveBeenCalledWith(
        expect.objectContaining(anonymBody)
      );
    });

    it("bedient den alten Pfad für Privatnutzer weiterhin ohne Token", async () => {
      await request(app.getHttpServer())
        .post("/email/sendEmailPrivatUser")
        .send(anonymBody)
        .expect(201);

      expect(emailService.sendEmailToPrivateUser).toHaveBeenCalledWith(
        expect.objectContaining(anonymBody)
      );
    });
  });
});
