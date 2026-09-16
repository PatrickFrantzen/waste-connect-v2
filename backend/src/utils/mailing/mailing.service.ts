import * as nodemailer from "nodemailer";
import { Injectable } from "@nestjs/common";
import * as handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";
import { ConfigService } from "@nestjs/config";
import { Benutzer } from "src/schemas/user.schema";
import { InseratNEST } from "src/schemas/inserat.schema";

@Injectable()
export class MailingService {
  private transporter: nodemailer.Transporter;
  private confirmationTemplate: handlebars.TemplateDelegate;
  private passwordResetTemplate: handlebars.TemplateDelegate;
  private newUserToAdminTemplate: handlebars.TemplateDelegate;
  private changedPasswordTemplate: handlebars.TemplateDelegate;

  private inseratErstelltTemplate: handlebars.TemplateDelegate;

  private mailToPrivateUserTemplate: handlebars.TemplateDelegate;
  private mailToEntsorgerTemplate: handlebars.TemplateDelegate;
  private sendAnonymEmailConfirmationTemplate: handlebars.TemplateDelegate;
  private sendMessageConfirmationTemplate: handlebars.TemplateDelegate;

  private buchungToAdminTemplate: handlebars.TemplateDelegate;
  private buchungConfirmationTemplate: handlebars.TemplateDelegate;

  private informationAdminDeletedInseratTemplate: handlebars.TemplateDelegate;

  private feedbackTemplate: handlebars.TemplateDelegate;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport(
      {
        host: this.configService.get("MAIL_HOST"),
        port: Number(this.configService.get("MAIL_PORT")),
        secure: this.configService.get("MAIL_SECURE") === "true",
        auth: {
          user: this.configService.get("MAIL_USER"),
          pass: this.configService.get("MAIL_PW"),
        },
        tls: {
          // TLS-Zertifikate werden verifiziert. Nur wenn ausdrücklich
          // MAIL_ALLOW_INSECURE_TLS=true gesetzt ist (lokale Entwicklung gegen
          // einen Mail-Catcher mit selbstsigniertem Zertifikat), wird die
          // Prüfung abgeschaltet.
          rejectUnauthorized:
            this.configService.get("MAIL_ALLOW_INSECURE_TLS") !== "true",
        },
      },
      {
        from: {
          name: "info@waste-connect.de",
          address: this.configService.get("MAIL_FROM"),
        },
      }
    );

    // Load Handlebars templates
    this.confirmationTemplate = this.loadTemplate("confirmation.hbs");
    this.newUserToAdminTemplate = this.loadTemplate("newUserToAdmin.hbs");
    this.passwordResetTemplate = this.loadTemplate("resetPassword.hbs");
    this.changedPasswordTemplate = this.loadTemplate("changedPassword.hbs");

    this.inseratErstelltTemplate = this.loadTemplate("inseratErstellt.hbs");

    this.mailToPrivateUserTemplate = this.loadTemplate("mailToPrivateUser.hbs");
    this.mailToEntsorgerTemplate = this.loadTemplate("mailToEntsorger.hbs");
    this.sendAnonymEmailConfirmationTemplate = this.loadTemplate(
      "sendAnonymEmailConfirmation.hbs"
    );
    this.sendMessageConfirmationTemplate = this.loadTemplate(
      "sendMessageConfirmation.hbs"
    );
    this.buchungConfirmationTemplate = this.loadTemplate(
      "buchungConfirmation.hbs"
    );
    this.buchungToAdminTemplate = this.loadTemplate("buchungToAdmin.hbs");
    this.informationAdminDeletedInseratTemplate = this.loadTemplate(
      "informationAdminDeletedInserat.hbs"
    );
    this.feedbackTemplate = this.loadTemplate("feedback.hbs");
  }

  private loadTemplate(templateName: string): handlebars.TemplateDelegate {
    const templatesFolderPath = path.join(__dirname, "./templates");
    const templatePath = path.join(templatesFolderPath, templateName);

    const templateSource = fs.readFileSync(templatePath, "utf8");
    return handlebars.compile(templateSource);
  }

  async sendUserConfirmation(email: string, emailToken: string) {
    const url = `${this.configService.get("URL")}/confirmEmail/${emailToken}`;
    const html = this.confirmationTemplate({ url });
    await this.transporter.sendMail({
      to: email,
      subject:
        "Willkommen bei waste-connect.de! Bitte bestätigen Sie Ihre E-Mail-Adresse.",
      html: html,
    });
  }

  async sendNewUserCreationToAdmin(email: string) {
    const html = this.newUserToAdminTemplate({ email });
    await this.transporter.sendMail({
      to: this.configService.get("MAIL_USER"),
      subject: "Neuer Benutzer registriert",
      html: html,
    });
  }

  async resetPassword(
    userEmail: string,
    userAnsprechpartner:string,
    tempPassword: string
  ) {
    const html = this.passwordResetTemplate({
      name: userAnsprechpartner,
      tempPassword,
    });
    await this.transporter.sendMail({
      to: userEmail,
      subject: "Dein temporäres Passwort für waste-connect.de",
      html: html,
    });
  }

  async sendChangedPasswordConfirmation(
    ansprechpartner: string,
    email: string
  ) {
    const html = this.changedPasswordTemplate({
      name: ansprechpartner,
    });
    await this.transporter.sendMail({
      to: email,
      subject: "Dein Passwort wurde erfolgreich geändert",
      html: html,
    });
  }

  async sendInseratErstelltConfirmation(email: string, inserat: InseratNEST) {
    const abfallbezeichnung = inserat.inseratBeschreibung.abfallbezeichnung;
    const html = this.inseratErstelltTemplate({
      abfallbezeichnung: abfallbezeichnung,
    });
    await this.transporter.sendMail({
      to: email,
      subject: `Dein Inserat ${abfallbezeichnung} wurde erfolgreich erstellt`,
      html: html,
    });
  }

  async sendMailToPrivateUser(
    emailadresseOfEmpfaenger: string,
    abfallbezeichnung: string,
    empfaenger: string,
    subject: string,
    message: string,
    emailadresseOfSender: string,
    telefonnummerOfSender: string
  ) {
    const html = this.mailToPrivateUserTemplate({
      abfallbezeichnung,
      empfaenger,
      subject,
      message,
      emailadresseOfSender,
      telefonnummerOfSender,
      url: this.configService.get("URL"),
    });
    await this.transporter.sendMail({
      to: emailadresseOfEmpfaenger,
      subject: `Neue Nachricht zu deinem Inserat: ${abfallbezeichnung}`,
      html: html,
    });
  }

  async sendMailToEntsorger(
    emailadresseOfEmpfaenger: string,
    empfaenger: string,
    subject: string,
    message: string,
    emailadresseOfSender: string,
    telefonnummerOfSender: string
  ) {
    const html = this.mailToEntsorgerTemplate({
      empfaenger,
      subject,
      message,
      emailadresseOfSender,
      telefonnummerOfSender,
      url: this.configService.get("URL"),
    });

    await this.transporter.sendMail({
      to: emailadresseOfEmpfaenger,
      subject: `Neue Nachricht zu deinem Entsorgerprofil von ${empfaenger}`,
      html: html,
    });
  }

  async sendAnonymEmailConfirmation(
    emailadresseOfEmpfaenger: string,
    bezeichnung: string
  ) {
    const html = this.sendAnonymEmailConfirmationTemplate({
      bezeichnung,
      url: this.configService.get("URL"),
    });
    await this.transporter.sendMail({
      to: emailadresseOfEmpfaenger,
      subject: `Deine Anfrage wurde erfolgreich bearbeitet`,
      html: html,
    });
  }

  async sendMessageConfirmation(
    nameOfSender: string,
    emailadresseOfSender: string,
    bezeichnung: string
  ) {
    const html = this.sendMessageConfirmationTemplate({
      nameOfSender,
      emailadresseOfSender,
      bezeichnung,
      url: this.configService.get("URL"),
    });
    await this.transporter.sendMail({
      to: emailadresseOfSender,
      subject: `Deine Nachricht wurde erfolgreich versendet`,
      html: html,
    });
  }

  async sendBuchungConfirmation(
    email: string,
    abfallbezeichnung: string,
    ofTheDayType: string,
    dates: string[],
    bestellnummer: string
  ) {
    const datesString = dates.join(", ");
    const html = this.buchungConfirmationTemplate({
      abfallbezeichnung,
      type: ofTheDayType,
      date: datesString,
      bestellnummer
    });
    await this.transporter.sendMail({
      to: email,
      subject: `Deine Buchung zum Inserat ${abfallbezeichnung} wurde erfolgreich bearbeitet`,
      html: html,
    });
  }

  async sendBuchungToAdmin(
    ansprechpartner: string,
    firma: string,
    email: string,
    abfallbezeichnung: string,
    inseratID: string,
    ofTheDayType: string,
    dates: string[],
    bestellnummer: string
  ) {
    const datesString = dates.join(", ");
    const html = this.buchungToAdminTemplate({
      user: ansprechpartner,
      firma: firma,
      abfallbezeichnung,
      type: ofTheDayType,
      date: datesString,
      email: email,
      inseratID,
      bestellnummer
    });
    await this.transporter.sendMail({
      to: this.configService.get("MAIL_USER"),
      subject: `Neue Buchung zum Inserat ${abfallbezeichnung}`,
      html: html,
    });
  }

  async sendInformationAdminDeletedInserat(inseratErsteller: string, inseratErstellerEmail: string, inseratBeschreibung: string){
    const html = this.informationAdminDeletedInseratTemplate({
      inseratErsteller,
      inseratBeschreibung
    });
    await this.transporter.sendMail({
      to: inseratErstellerEmail,
      subject: `Dein Inserat ${inseratBeschreibung} wurde gelöscht`,
      html: html
    });
  }

  async sendFeedback(absender: string, subject: string, message: string) {
    const html = this.feedbackTemplate({
      absender,
      subject,
      message,
    });
    await this.transporter.sendMail({
      to: this.configService.get("MAIL_USER"),
      subject: "Neues Feedback",
      html: html,
    });
  }

  // Other email sending methods...
}
