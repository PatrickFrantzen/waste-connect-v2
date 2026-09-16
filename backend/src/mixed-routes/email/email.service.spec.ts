import { getModelToken } from "@nestjs/mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { EntsorgerService } from "src/protected/entsorger/entsorger.service";
import { InseratService } from "src/protected/inserat/inserat.service";
import { Benutzer } from "src/schemas/user.schema";
import { MailingService } from "src/utils/mailing/mailing.service";
import { EmailService } from "./email.service";

const EMPFAENGER_ID = "665f1c2b9d3e4a0012ab34cd";
const ABSENDER_ID = "665f1c2b9d3e4a0012ab9999";

const absender = {
  _id: ABSENDER_ID,
  email: "absender@example.org",
  firmendaten: { telefonnummer: "0123", ansprechpartner: "Anna Absender" },
} as unknown as Benutzer;

const empfaengerKonto = (privateModus = false) => ({
  _id: EMPFAENGER_ID,
  email: "empfaenger@example.org",
  privateModus,
  firmendaten: {
    ansprechpartner: "Erik Empfänger",
    firmenname: "Empfänger GmbH",
  },
});

const absenderKonto = {
  _id: ABSENDER_ID,
  email: "absender@example.org",
  firmendaten: { ansprechpartner: "Anna Absender" },
};

const emailDto = { betreff: "Anfrage", nachricht: "Hallo", ID: "inserat-id" };

describe("EmailService", () => {
  let service: EmailService;

  const benutzerModel = {
    findOne: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn().mockResolvedValue(undefined),
  };
  const inseratService = { findOneWithUser: jest.fn(), findOne: jest.fn() };
  const entsorgerService = { findOneWithUser: jest.fn() };
  const mailService = {
    sendMailToPrivateUser: jest.fn(),
    sendMailToEntsorger: jest.fn(),
    sendMessageConfirmation: jest.fn(),
    sendAnonymEmailConfirmation: jest.fn(),
    sendFeedback: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    benutzerModel.findByIdAndUpdate.mockResolvedValue(undefined);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        { provide: getModelToken(Benutzer.name), useValue: benutzerModel },
        { provide: InseratService, useValue: inseratService },
        { provide: EntsorgerService, useValue: entsorgerService },
        { provide: MailingService, useValue: mailService },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  describe("Anschreiben zu einem Inserat", () => {
    const inserat = {
      inseratBeschreibung: { abfallbezeichnung: "Altholz A1" },
      user: { _id: EMPFAENGER_ID },
    };

    it("verschickt die Mail an den Inseratersteller und protokolliert sie bei beiden Konten", async () => {
      inseratService.findOneWithUser.mockResolvedValue(inserat);
      benutzerModel.findOne
        .mockResolvedValueOnce(empfaengerKonto())
        .mockResolvedValueOnce(absenderKonto);

      const result = await service.getUserAndSendMail(emailDto, absender);

      // Absenderdaten stammen aus dem Token, nicht aus dem Body.
      expect(mailService.sendMailToPrivateUser).toHaveBeenCalledWith(
        "empfaenger@example.org",
        "Altholz A1",
        "Erik Empfänger",
        "Anfrage",
        "Hallo",
        "absender@example.org",
        "0123"
      );
      expect(mailService.sendMessageConfirmation).toHaveBeenCalledWith(
        "Anna Absender",
        "absender@example.org",
        "Altholz A1"
      );
      expect(benutzerModel.findByIdAndUpdate).toHaveBeenNthCalledWith(
        1,
        EMPFAENGER_ID,
        {
          $push: {
            "messages.empfangeneNachrichten": expect.objectContaining({
              emailadresseOfSender: "absender@example.org",
              emailadresseOfEmpfaenger: "empfaenger@example.org",
              subject: "Anfrage",
              message: "Hallo",
              status: "empfangen",
            }),
          },
          $inc: { "messages.numberOfEmpfangeneNachrichten": 1 },
        }
      );
      expect(result).toEqual({
        message: "Email wurde erfolgreich versendet.",
        updateMessage: expect.objectContaining({
          status: "gesendet",
          emailadresseOfEmpfaenger: "empfaenger@example.org",
        }),
      });
    });

    it("verbirgt die Empfängeradresse im gesendeten Protokoll, wenn der Empfänger privat ist", async () => {
      inseratService.findOneWithUser.mockResolvedValue(inserat);
      benutzerModel.findOne
        .mockResolvedValueOnce(empfaengerKonto(true))
        .mockResolvedValueOnce(absenderKonto);

      const result = await service.getUserAndSendMail(emailDto, absender);

      expect(result).toEqual({
        message: "Email wurde erfolgreich versendet.",
        updateMessage: expect.objectContaining({
          emailadresseOfEmpfaenger: "keine Angabe",
        }),
      });
      // Die Mail selbst geht weiterhin an die echte Adresse.
      expect(mailService.sendMailToPrivateUser).toHaveBeenCalledWith(
        "empfaenger@example.org",
        expect.anything(),
        expect.anything(),
        expect.anything(),
        expect.anything(),
        expect.anything(),
        expect.anything()
      );
    });

    it("bestätigt anonymen Absendern per Anonym-Template und protokolliert nichts bei ihnen", async () => {
      inseratService.findOneWithUser.mockResolvedValue(inserat);
      benutzerModel.findOne
        .mockResolvedValueOnce(empfaengerKonto())
        .mockResolvedValueOnce(null);

      const result = await service.getAnonymAndSendMail({
        ...emailDto,
        email: "anonym@example.org",
        telefonnummer: "0999",
      });

      expect(mailService.sendAnonymEmailConfirmation).toHaveBeenCalledWith(
        "anonym@example.org",
        "Altholz A1"
      );
      expect(mailService.sendMessageConfirmation).not.toHaveBeenCalled();
      // Nur der Empfänger bekommt einen Protokolleintrag.
      expect(benutzerModel.findByIdAndUpdate).toHaveBeenCalledTimes(1);
      expect(result).toEqual({
        message: "Email wurde erfolgreich versendet.",
        updateMessage: undefined,
      });
    });

    it("meldet ein nicht gefundenes Inserat, ohne eine Mail zu verschicken", async () => {
      inseratService.findOneWithUser.mockResolvedValue("Inserat nicht gefunden");

      const result = await service.getUserAndSendMail(emailDto, absender);

      expect(result).toEqual({ message: "Inserat nicht gefunden" });
      expect(mailService.sendMailToPrivateUser).not.toHaveBeenCalled();
      expect(benutzerModel.findByIdAndUpdate).not.toHaveBeenCalled();
    });
  });

  describe("Anschreiben an einen Entsorger", () => {
    it("verschickt die Entsorger-Mail und protokolliert sie mit dem Firmennamen", async () => {
      entsorgerService.findOneWithUser.mockResolvedValue({
        userid: EMPFAENGER_ID,
      });
      benutzerModel.findById.mockResolvedValue(empfaengerKonto());
      benutzerModel.findOne.mockResolvedValue(absenderKonto);

      const result = await service.getUserAndSendEntsorgerMail(
        emailDto,
        absender
      );

      expect(mailService.sendMailToEntsorger).toHaveBeenCalledWith(
        "empfaenger@example.org",
        "Erik Empfänger",
        "Anfrage",
        "Hallo",
        "absender@example.org",
        "0123"
      );
      expect(mailService.sendMessageConfirmation).toHaveBeenCalledWith(
        "Anna Absender",
        "absender@example.org",
        "Empfänger GmbH"
      );
      expect(result).toMatchObject({
        message: "Email wurde erfolgreich versendet.",
      });
    });

    it("meldet einen nicht gefundenen Entsorger, ohne eine Mail zu verschicken", async () => {
      entsorgerService.findOneWithUser.mockResolvedValue(
        "Entsorger nicht gefunden"
      );

      const result = await service.getAnonymAndSendEntsorgerMail({
        ...emailDto,
        email: "anonym@example.org",
      });

      expect(result).toEqual({ message: "Entsorger nicht gefunden" });
      expect(mailService.sendMailToEntsorger).not.toHaveBeenCalled();
    });
  });

  describe("feedbackEmail", () => {
    it("verschickt das Feedback unter der Adresse des angemeldeten Benutzers", async () => {
      const result = await service.feedbackEmail(absender, {
        ...emailDto,
        email: "wird-ignoriert@example.org",
      });

      expect(mailService.sendFeedback).toHaveBeenCalledWith(
        "absender@example.org",
        "Anfrage",
        "Hallo"
      );
      expect(result).toEqual({ message: "Email wurde erfolgreich versendet." });
    });

    it("meldet einen Fehler des Mailversands als Text statt ihn durchzureichen", async () => {
      mailService.sendFeedback.mockImplementation(() => {
        throw new Error("SMTP down");
      });

      const result = await service.feedbackEmail(absender, {
        ...emailDto,
        email: "absender@example.org",
      });

      expect(result).toEqual({ message: "Email konnte nicht versendet werden." });
    });
  });
});
