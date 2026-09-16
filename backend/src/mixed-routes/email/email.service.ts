import { Injectable } from "@nestjs/common";
import { EmailDto, UserEmailDto } from "./dto/email.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { MailingService } from "src/utils/mailing/mailing.service";
import { InseratService } from "src/protected/inserat/inserat.service";
import { Message } from "src/models/benutzer/message.model";
import { Benutzer } from "src/schemas/user.schema";
import { EntsorgerService } from "src/protected/entsorger/entsorger.service";

@Injectable()
export class EmailService {
  constructor(
    @InjectModel(Benutzer.name) private benutzerModel: Model<Benutzer>,
    private readonly inseratService: InseratService,
    private readonly entsorgerService: EntsorgerService,
    private mailService: MailingService
  ) {}

  async getUserAndSendMail(emailDto: UserEmailDto, user: Benutzer): Promise<{ message: string; updateMessage: Message } | { message: string }> {
    const email = user.email;
    const telefonnummer = user.firmendaten.telefonnummer;

    const result = await this.sendEmail(emailDto, email, telefonnummer);
    return result;
  }

  async getAnonymAndSendMail(emailDto: EmailDto): Promise<{ message: string; updateMessage: Message } | { message: string }> {
    const email = emailDto.email;
    const telefonnummer = emailDto.telefonnummer;

   const result = await this.sendEmail(emailDto, email, telefonnummer);
   return result;
  }

  async getUserAndSendEntsorgerMail(emailDto: UserEmailDto, user: Benutzer): Promise<{ message: string; updateMessage: Message } | { message: string }> {
    const email = user.email;
    const telefonnummer = user.firmendaten.telefonnummer;
    const result = await this.sendEntsorgerEmail(emailDto, email, telefonnummer);
    return result;
  }

  async getAnonymAndSendEntsorgerMail(emailDto: EmailDto): Promise<{ message: string; updateMessage: Message } | { message: string }> {
    const email = emailDto.email;
    const telefonnummer = emailDto.telefonnummer;
    const result = await this.sendEntsorgerEmail(emailDto, email, telefonnummer);
    return result;
  }

  async sendEmail(
    emailDto: UserEmailDto,
    email: string,
    telefonnummer: string
  ): Promise<
    { message: string; updateMessage: Message } | { message: string }
  > {
    const emailSender = email;
    const telefonnummerSender = telefonnummer
    const betreff = emailDto.betreff;
    const nachricht = emailDto.nachricht;
    const inseratId = emailDto.ID;

    const inserat = await this.inseratService.findOneWithUser(inseratId);
    if (typeof inserat === "string") {
      return { message: "Inserat nicht gefunden" };
    }
    const abfallbezeichnung = inserat.inseratBeschreibung.abfallbezeichnung;
    const userIDOfInserat = inserat.user._id;

    const userOfInserat = await this.benutzerModel.findOne({
      _id: userIDOfInserat,
    });
    const emailEmpfaenger = userOfInserat.email;
    const privateModusOfEmpfaenger = userOfInserat.privateModus;

    this.mailService.sendMailToPrivateUser(
      emailEmpfaenger,
      abfallbezeichnung,
      userOfInserat.firmendaten.ansprechpartner,
      betreff,
      nachricht,
      emailSender,
      telefonnummerSender
    );

    const updateMessage = await this.updateMessageObjectOfUser(
      emailSender,
      emailEmpfaenger,
      betreff,
      nachricht,
      userIDOfInserat,
      abfallbezeichnung,
      privateModusOfEmpfaenger
    );

    return { message: "Email wurde erfolgreich versendet.", updateMessage };
  }

  async sendEntsorgerEmail(
    emailDto: UserEmailDto,
    email: string,
    telefonnummer: string
  ): Promise<
    { message: string; updateMessage: Message } | { message: string }
  > {
    const emailSender = email;
    const telefonnummerSender = telefonnummer;
    const betreff = emailDto.betreff;
    const nachricht = emailDto.nachricht;
    const entsorgerId = emailDto.ID;

    const entsorger = await this.entsorgerService.findOneWithUser(entsorgerId);
    if (typeof entsorger === "string") {
      return { message: "Entsorger nicht gefunden" };
    }

    const userIDOfEnsorger = entsorger.userid;


    const userOfInserat = await this.benutzerModel.findById({
      _id: userIDOfEnsorger,
    });


    const emailEmpfaenger = userOfInserat.email;
    const privateModusOfEmpfaenger = userOfInserat.privateModus;
    const firmaEmpfaenger = userOfInserat.firmendaten.firmenname;

    this.mailService.sendMailToEntsorger(
      emailEmpfaenger,
      userOfInserat.firmendaten.ansprechpartner,
      betreff,
      nachricht,
      emailSender,
      telefonnummerSender
    );

    const updateMessage = await this.updateMessageObjectOfUser(
      emailSender,
      emailEmpfaenger,
      betreff,
      nachricht,
      userIDOfEnsorger,
      firmaEmpfaenger,
      privateModusOfEmpfaenger
    );

    return { message: "Email wurde erfolgreich versendet.", updateMessage };
  }

  // 

  async feedbackEmail(user: Benutzer, emailDto: EmailDto) {
    try {
      const emailAdressOfSender = user.email;
      let telefonnummerOfSender = null;
      if (emailDto.telefonnummer) {
        telefonnummerOfSender = emailDto.telefonnummer;
      }
      const subject = emailDto.betreff;
      const message = emailDto.nachricht;

      this.mailService.sendFeedback(emailAdressOfSender, subject, message);

      return {message: "Email wurde erfolgreich versendet."};
    } catch (error) {
      return {message: "Email konnte nicht versendet werden."};
    }
  }

  async updateMessageObjectOfUser(
    emailSender: string,
    emailEmpfaenger: string,
    betreff: string,
    nachricht: string,
    userIDOfInserat: Types.ObjectId,
    bezeichnung: string,
    privateModusOfEmpfaenger: boolean
  ) {
    let status = "empfangen";
    const date = new Date().toLocaleString();

    const updateMessage: Message = {
      emailadresseOfSender: emailSender,
      emailadresseOfEmpfaenger: emailEmpfaenger,
      subject: betreff,
      message: nachricht,
      status: status,
      date: date,
    };

    await this.benutzerModel.findByIdAndUpdate(userIDOfInserat, {
      $push: { "messages.empfangeneNachrichten": updateMessage },
      $inc: { "messages.numberOfEmpfangeneNachrichten": 1 },
    });

    const accountOfSender = await this.benutzerModel.findOne({
      email: emailSender,
    });

    if (!accountOfSender) {
      this.mailService.sendAnonymEmailConfirmation(emailSender, bezeichnung);
    } else
      this.mailService.sendMessageConfirmation(
        accountOfSender.firmendaten.ansprechpartner,
        emailSender,
        bezeichnung
      );

    if (!accountOfSender) {
      return;
    }

    if (privateModusOfEmpfaenger) {
      emailEmpfaenger = "keine Angabe";
    }

    status = "gesendet";

    const updateMessage2: Message = {
      emailadresseOfSender: emailSender,
      emailadresseOfEmpfaenger: emailEmpfaenger,
      subject: betreff,
      message: nachricht,
      status: status,
      date: date,
    };

    await this.benutzerModel.findByIdAndUpdate(accountOfSender._id, {
      $push: { "messages.gesendeteNachrichten": updateMessage2 },
      $inc: { "messages.numberOfGesendeteNachrichten": 1 },
    });

    return updateMessage2;
  }

  async sendEmailToPrivateUser(emailDto: EmailDto) {
    try {
      const emailAdressOfSender = emailDto.email;
      let telefonnummerOfSender = null;
      if (emailDto.telefonnummer) {
        telefonnummerOfSender = emailDto.telefonnummer;
      }
      const subject = emailDto.betreff;
      const message = emailDto.nachricht;
      const inseratId = emailDto.ID; //ID des Inserats um den Ersteller zu finden

      const inserat = await this.inseratService.findOne(inseratId);

      if (typeof inserat === "string") {
        return "Inserat nicht gefunden";
      }

      const IdOFReceiver = inserat.user._id;
      let emailAdressOfReceiver = inserat.user.email;
      const isEmpfaengerPrivate = inserat.user.privateModus;

      this.mailService.sendMailToPrivateUser(
        emailAdressOfReceiver,
        inserat.inseratBeschreibung.abfallbezeichnung,
        inserat.user.firmendaten.ansprechpartner,
        subject,
        message,
        emailAdressOfSender,
        telefonnummerOfSender
      );

      let status = "empfangen";
      const date = new Date().toLocaleString();

      const updateMessage: Message = {
        emailadresseOfSender: emailAdressOfSender,
        emailadresseOfEmpfaenger: emailAdressOfReceiver,
        subject: subject,
        message: message,
        status: status,
        date: date,
      };

      await this.benutzerModel.findByIdAndUpdate(IdOFReceiver, {
        $push: { "messageObject.empfangeneNachrichten": updateMessage },
        $inc: { "messageObject.numberOfEmpfangeneNachrichten": 1 },
      });

      const accountOfSender = await this.benutzerModel.findOne({
        email: emailAdressOfSender,
      });

      if (!accountOfSender) {
        this.mailService.sendAnonymEmailConfirmation(
          emailAdressOfSender,
          inserat.inseratBeschreibung.abfallbezeichnung
        );
      } else
        this.mailService.sendMessageConfirmation(
          accountOfSender.firmendaten.ansprechpartner,
          emailAdressOfSender,
          inserat.inseratBeschreibung.abfallbezeichnung
        );

      if (isEmpfaengerPrivate) {
        emailAdressOfReceiver = "keine Angabe";
      }

      status = "gesendet";

      const updateMessage2: Message = {
        emailadresseOfSender: emailAdressOfSender,
        emailadresseOfEmpfaenger: emailAdressOfReceiver,
        subject: subject,
        message: message,
        status: status,
        date: date,
      };

      await this.benutzerModel.findByIdAndUpdate(accountOfSender._id, {
        $push: { "messageObject.gesendeteNachrichten": updateMessage2 },
        $inc: { "messageObject.numberOfGesendeteNachrichten": 1 },
      });

      return "Email wurde erfolgreich versendet.";
    } catch (error) {
      return "Email konnte nicht versendet werden.";
    }
  }




  // async sendAnonymEmail(emailDto: EmailDto): Promise<{ message: string }> {
  //   const emailSender = emailDto.email;
  //   const telefonnummerSender = emailDto.telefonnummer;
  //   const betreff = emailDto.betreff;
  //   const nachricht = emailDto.nachricht;
  //   const inseratId = emailDto.ID;

  //   const inserat = await this.inseratService.findOneWithUser(inseratId);
  //   if (typeof inserat === "string") {
  //     return { message: "Inserat nicht gefunden" };
  //   }
  //   const abfallbezeichnung = inserat.inseratBeschreibung.abfallbezeichnung;
  //   const userIDOfInserat = inserat.user._id;

  //   const userOfInserat = await this.benutzerModel.findOne({
  //     _id: userIDOfInserat,
  //   });
  //   const emailEmpfaenger = userOfInserat.email;
  //   const privateModusOfEmpfaenger = userOfInserat.privateModus;

  //   this.mailService.sendMailToPrivateUser(
  //     emailEmpfaenger,
  //     abfallbezeichnung,
  //     userOfInserat.firmendaten.ansprechpartner,
  //     betreff,
  //     nachricht,
  //     emailSender,
  //     telefonnummerSender
  //   );

  //   await this.updateMessageObjectOfUser(
  //     emailSender,
  //     emailEmpfaenger,
  //     betreff,
  //     nachricht,
  //     userIDOfInserat,
  //     abfallbezeichnung,
  //     privateModusOfEmpfaenger
  //   );

  //   return { message: "Email wurde erfolgreich versendet." };
  // }

  // async sendEntsorgerAnonymEmail(
    //   emailDto: EmailDto
    // ): Promise<{ message: string }> {
    //   const emailSender = emailDto.email;
    //   const telefonnummerSender = emailDto.telefonnummer;
    //   const betreff = emailDto.betreff;
    //   const nachricht = emailDto.nachricht;
    //   const entsorgerId = emailDto.ID;
  
    //   const entsorger = await this.entsorgerService.findOneWithUser(entsorgerId);
    //   if (typeof entsorger === "string") {
    //     return { message: "Entsorger nicht gefunden" };
    //   }
  
    //   const userIDOfEnsorger = entsorger.userid;
  
    //   const userOfInserat = await this.benutzerModel.findOne({
    //     _id: userIDOfEnsorger,
    //   });
    //   const emailEmpfaenger = userOfInserat.email;
    //   const privateModusOfEmpfaenger = userOfInserat.privateModus;
    //   const firmaEmpfaenger = userOfInserat.firmendaten.firmenname;
  
    //   this.mailService.sendMailToEntsorger(
    //     emailEmpfaenger,
    //     userOfInserat.firmendaten.ansprechpartner,
    //     betreff,
    //     nachricht,
    //     emailSender,
    //     telefonnummerSender
    //   );
  
    //   await this.updateMessageObjectOfUser(
    //     emailSender,
    //     emailEmpfaenger,
    //     betreff,
    //     nachricht,
    //     userIDOfEnsorger,
    //     firmaEmpfaenger,
    //     privateModusOfEmpfaenger
    //   );
  
    //   return { message: "Email wurde erfolgreich versendet." };
    // }
}
