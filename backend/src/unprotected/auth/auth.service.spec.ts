import {
  BadRequestException,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { getModelToken } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";
import { EntsorgerService } from "src/protected/entsorger/entsorger.service";
import { LogistikerService } from "src/protected/logistiker/logistiker.service";
import { MailingService } from "src/utils/mailing/mailing.service";
import { AuthService } from "./auth.service";
import bcryptjs from "bcryptjs";

describe("AuthService", () => {
  let service: AuthService;
  const benutzerModel = { findOne: jest.fn() };

  beforeEach(async () => {
    jest.clearAllMocks();

    const moduleRef = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: getModelToken("Benutzer"), useValue: benutzerModel },
        { provide: JwtService, useValue: { sign: jest.fn() } },
        { provide: ConfigService, useValue: { get: jest.fn() } },
        { provide: MailingService, useValue: {} },
        { provide: EntsorgerService, useValue: {} },
        { provide: LogistikerService, useValue: {} },
      ],
    }).compile();

    service = moduleRef.get(AuthService);
  });

  describe("confirmEmail", () => {
    it("wirft bei unbekanntem Token eine BadRequestException statt eines TypeError", async () => {
      benutzerModel.findOne.mockResolvedValue(null);

      await expect(service.confirmEmail("unbekannt")).rejects.toBeInstanceOf(
        BadRequestException
      );
    });

    it("wirft bei bereits bestätigter E-Mail eine BadRequestException", async () => {
      benutzerModel.findOne.mockResolvedValue({
        benutzerdaten: { emailConfirmed: true },
      });

      await expect(service.confirmEmail("token")).rejects.toBeInstanceOf(
        BadRequestException
      );
    });
  });

  // Ticket #7: der catch-Block um den bcrypt-Vergleich fing zuvor die eigene
  // UnauthorizedException wieder ein und ersetzte "Falsches Passwort." durch
  // eine technische Meldung.
  describe("changePasswordForUser", () => {
    const benutzer: any = {
      email: "max@example.com",
      password: "hash",
      benutzerdaten: { temporaryPassword: "temphash" },
    };

    it("meldet ein falsches altes Passwort als solches", async () => {
      benutzerModel.findOne.mockResolvedValue(benutzer);
      jest.spyOn(bcryptjs, "compare").mockResolvedValue(false as never);

      const fehler = await service
        .changePasswordForUser(
          { oldPassword: "Alt123!", newPassword: "Neu12345!" } as any,
          benutzer
        )
        .catch((e: unknown) => e);

      expect(fehler).toBeInstanceOf(UnauthorizedException);
      expect((fehler as UnauthorizedException).getResponse()).toMatchObject({
        message: "Falsches Passwort.",
      });
    });

    it("meldet ein falsches temporäres Passwort als solches", async () => {
      benutzerModel.findOne.mockResolvedValue(benutzer);
      jest.spyOn(bcryptjs, "compare").mockResolvedValue(false as never);

      const fehler = await service
        .changePasswordForUser({
          email: "max@example.com",
          tempPassword: "Temp123!",
          newPassword: "Neu12345!",
        } as any)
        .catch((e: unknown) => e);

      expect((fehler as UnauthorizedException).getResponse()).toMatchObject({
        message: "Falsches temporäres Passwort.",
      });
    });
  });
});
