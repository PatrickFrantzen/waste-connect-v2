import {
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { getModelToken } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";
import { BenutzerProfilRegistry } from "src/common/profil-initialisierer/benutzer-profil.registry";
import { MailingService } from "src/utils/mailing/mailing.service";
import { AuthService } from "./auth.service";
import bcryptjs from "bcryptjs";

describe("AuthService", () => {
  let service: AuthService;
  const benutzerModel: any = jest.fn();
  benutzerModel.findOne = jest.fn();
  const profilRegistry = { getAll: jest.fn().mockReturnValue([]) };
  const mailService = {
    sendUserConfirmation: jest.fn().mockResolvedValue(undefined),
    sendNewUserCreationToAdmin: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    profilRegistry.getAll.mockReturnValue([]);

    const moduleRef = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: getModelToken("Benutzer"), useValue: benutzerModel },
        { provide: JwtService, useValue: { sign: jest.fn() } },
        { provide: ConfigService, useValue: { get: jest.fn() } },
        { provide: MailingService, useValue: mailService },
        { provide: BenutzerProfilRegistry, useValue: profilRegistry },
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

  /**
   * Löst die vorherige direkte Kopplung an EntsorgerService/LogistikerService
   * ab: AuthService kennt nur noch die BenutzerProfilRegistry. Vorher wurden
   * die beiden .create()-Aufrufe nicht awaitet - ein Fehler dort verschwand
   * lautlos, der Benutzer blieb ohne Profil stehen (siehe Architecture
   * Review). Jetzt: parallel awaitet, bei Fehler Rollback des gerade
   * angelegten Benutzers.
   */
  describe("createUser", () => {
    let instance: any;

    beforeEach(() => {
      instance = {
        _id: "neuer-benutzer-id",
        email: "neu@example.com",
        benutzerdaten: { emailToken: "token-abc" },
        save: jest.fn().mockResolvedValue(undefined),
        deleteOne: jest.fn().mockResolvedValue(undefined),
      };
      benutzerModel.mockImplementation(() => instance);
    });

    it("ruft alle registrierten Profil-Initialisierer mit der neuen Benutzer-ID auf", async () => {
      const entsorgerInit = { erstelleProfil: jest.fn().mockResolvedValue(undefined) };
      const logistikerInit = { erstelleProfil: jest.fn().mockResolvedValue(undefined) };
      profilRegistry.getAll.mockReturnValue([entsorgerInit, logistikerInit]);

      const result = await service.createUser({
        email: "neu@example.com",
        password: "Abcdef12!",
      } as any);

      expect(entsorgerInit.erstelleProfil).toHaveBeenCalledWith(instance._id);
      expect(logistikerInit.erstelleProfil).toHaveBeenCalledWith(instance._id);
      expect(result.message).toMatch(/erfolgreich/);
    });

    it("löscht den Benutzer wieder und wirft, wenn ein Profil-Initialisierer fehlschlägt", async () => {
      const fehlschlagend = {
        erstelleProfil: jest.fn().mockRejectedValue(new Error("db kaputt")),
      };
      profilRegistry.getAll.mockReturnValue([fehlschlagend]);

      await expect(
        service.createUser({
          email: "neu@example.com",
          password: "Abcdef12!",
        } as any)
      ).rejects.toBeInstanceOf(InternalServerErrorException);

      expect(instance.deleteOne).toHaveBeenCalled();
      expect(mailService.sendUserConfirmation).not.toHaveBeenCalled();
    });
  });
});
