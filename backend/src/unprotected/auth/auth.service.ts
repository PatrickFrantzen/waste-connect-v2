import {
  BadRequestException,
  ConflictException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Benutzer } from "src/schemas/user.schema";
import { AuthCredentialsDTO, UpdatePasswordDTO } from "./dto/auth-credentials.dto";
import * as bcryptjs from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "./jwt-payload.interface";
import { DocumentType } from "@typegoose/typegoose";
import { EntsorgerService } from "src/protected/entsorger/entsorger.service";
import { LogistikerService } from "src/protected/logistiker/logistiker.service";
import { MailingService } from "src/utils/mailing/mailing.service";
import * as crypto from "crypto";
import { Benutzerdaten } from "src/models/benutzer/benutzderdaten.model";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectModel(Benutzer.name) private benutzerModel: Model<Benutzer>,
    private entsorgerService: EntsorgerService,
    private logistikerService: LogistikerService,
    private jwtService: JwtService,
    private mailService: MailingService
  ) {}

  async createUser(authCredentialsDTO: AuthCredentialsDTO): Promise<{message: string}> {
    const { email, password } = authCredentialsDTO;

    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(password, salt);

    const createNewUser = this.createNewUserObject(email, hashedPassword);
    try {
      await createNewUser.save();
      this.entsorgerService.create(createNewUser._id); //Entsorgerprofil hinzufügen
      this.logistikerService.create(createNewUser._id); //Logistikerprofil hinzufügen
      await this.mailService.sendUserConfirmation(
        createNewUser.email,
        createNewUser.benutzerdaten.emailToken
      );
      await this.mailService.sendNewUserCreationToAdmin(createNewUser.email);
      return { message: "Du hast erfolgreich ein Konto erstellt. Bitte bestätige deine Emailadresse." };
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate username Code für MongoDB
        throw new ConflictException(
          "Email bereits vergeben. Bitte wählen Sie eine andere Emailadresse."
        );
      } else {
        this.logger.error(
          `Benutzeranlage fehlgeschlagen (${email})`,
          error instanceof Error ? error.stack : String(error)
        );
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(
    authCredentialsDTO: AuthCredentialsDTO
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialsDTO;
    const user = await this.benutzerModel.findOne({ email });

    if (user && !user.benutzerdaten.emailConfirmed) {
      throw new UnauthorizedException(
        "Bitte bestätige deine E-Mail-Adresse und logge dich erneut ein."
      );
    }

    if (user && (await bcryptjs.compare(password, user.password))) {
      const id = user._id.toString();
      const isAdmin = user.isAdmin;
      const privateUser = user.privateModus;
      const payload: JwtPayload = {
        _id: id,
        isAdmin: isAdmin,
        isPrivate: privateUser,
        firstLogin: user.benutzerdaten.firstLogin,
      };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException(
        "Falsche Anmeldedaten. Bitte versuchen Sie es erneut."
      );
    }
  }

  async confirmEmail(token: string): Promise<{message: string}> {
    const user = await this.benutzerModel.findOne({
      "benutzerdaten.emailToken": token,
    });

    if (!user) {
      throw new BadRequestException(
        "Der Bestätigungslink ist ungültig."
      );
    }

    if (user.benutzerdaten.emailConfirmed === true) {
      throw new BadRequestException("Deine E-Mail-Adresse wurde bereits bestätigt.");
    }

    if (user.benutzerdaten.emailTokenExpires < new Date()) {
      //User wird gelöscht, wenn er sich nicht innerhalb von 24 Stunden bestätigt
      //Alternative: User kann neuen Link beantragen.
      await user.deleteOne();
      throw new UnauthorizedException(
        "Der Link ist abgelaufen. Bitte erstelle einen neuen Account mit deiner E-Mail-Adresse."
      );
    }

    user.benutzerdaten.emailConfirmed = true;
    user.markModified('benutzerdaten');

    await user.save();

    const test = await this.benutzerModel.findOne({
      "benutzerdaten.emailToken": token,
    });

    return {message: "Deine E-Mail-Adresse wurde erfolgreich bestätigt. Du kannst dich jetzt einloggen."};
  }

  async resetPassword(email: string): Promise<{message: string}> {
    const user = await this.benutzerModel.findOne({ email });

    if (!user) {
      throw new BadRequestException();
    }

    const tempPassword = crypto.randomBytes(8).toString("hex");
    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(tempPassword, salt);

    const expires = new Date();
    expires.setHours(expires.getHours() + 24);

    user.benutzerdaten.resetPasswordExpires = expires;
    user.benutzerdaten.temporaryPassword = hashedPassword;
    user.markModified('benutzerdaten');
    await user.save();

    try {
      const ansprechpartner = user.firmendaten.ansprechpartner;
      const userEmail = user.email;
      await this.mailService.resetPassword(userEmail, ansprechpartner, tempPassword);
      return {message: "Ein temporäres Passwort wurde an deine E-Mail-Adresse gesendet."};
    } catch (error) {
      throw new BadRequestException(
        {message: "Die E-Mail konnte nicht gesendet werden. Bitte versuche es später erneut."}
      );
    }
  }

  changePasswordForUser(updatePasswordDTO: UpdatePasswordDTO, user?: Benutzer) {

    const { oldPassword, newPassword, tempPassword } = updatePasswordDTO;

    if (oldPassword && newPassword) {
      return this.changePasswordWithOldPassword(updatePasswordDTO, user);
    } else if (tempPassword && newPassword) {
      return this.changePasswordWithTempPassword(updatePasswordDTO);
    } else {
      throw new BadRequestException(
        "Bitte überprüfe deine angegebenen Daten und versuche es erneut."
      );
    }
  }
  
  private async changePasswordWithOldPassword(
    updatePasswordDTO: UpdatePasswordDTO,
    user: Benutzer
  ) {
    const { oldPassword, newPassword } = updatePasswordDTO;
    const email = user.email;
    return this.changePassword(email, oldPassword, newPassword);
  }
  
  private async changePasswordWithTempPassword(
    updatePasswordDTO: UpdatePasswordDTO
  ) {
    const { email, tempPassword, newPassword } = updatePasswordDTO;
    return this.changePassword(email, tempPassword, newPassword, 'temporaryPassword', 'Falsches temporäres Passwort.');
  }

  private async changePassword(
    email: string,
    providedPassword: string,
    newPassword: string,
    passwordField: string = 'password',
    errorMessage: string = 'Falsches Passwort.'
  ) {
    const user = await this.benutzerModel.findOne({ email });


    if (!user) {
      throw new BadRequestException();
    }

    const passwordToCompare = passwordField === 'password' ? user.password : user.benutzerdaten.temporaryPassword;

    try {
      const isMatch = await bcryptjs.compare(providedPassword, passwordToCompare);
      if (!isMatch) {
        throw new UnauthorizedException({message: errorMessage});
      }
    } catch (error) {
      // Ein falsches Passwort ist bereits eine UnauthorizedException und darf
      // nicht mit einer technischen Fehlermeldung überschrieben werden.
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(
        "Passwortvergleich fehlgeschlagen",
        error instanceof Error ? error.stack : String(error)
      );
      throw new UnauthorizedException({message: 'Ein Fehler ist aufgetreten beim Vergleichen der Passwörter.'});
    }

  
    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(newPassword, salt);
  
    user.password = hashedPassword;
    user.markModified('password');
    await user.save();
    const ansprechpartner = user.firmendaten.ansprechpartner;
    const emailAdress = user.email;
    await this.mailService.sendChangedPasswordConfirmation(ansprechpartner, emailAdress);
    return {message: "Dein Passwort wurde erfolgreich geändert."};
  }

  createNewUserObject(
    email: string,
    hashedPassword: string
  ): DocumentType<Benutzer> {
    const token = crypto.randomBytes(20).toString("hex");
    const now = new Date();
    const expires = new Date();
    expires.setHours(now.getHours() + 24);

    const newUser = new this.benutzerModel({
      email,
      password: hashedPassword,
      isAdmin: false,
      firmendaten: {
        firmenname: "",
        firmenadresse: "",
        firmenwebseite: "",
        telefonnummer: "",
        ansprechpartner: "",
        stadt: "",
        postleitzahl: "",
        bundesland: "",
        standortFavoriten: [],
      },
      benutzerdaten: {
        firstLogin: true,
        private: false,
        emailConfirmed: false,
        temporaryPassword: "",
        accoutCreated: new Date(),
        resetPasswordExpires: new Date(),
        emailToken: token,
        emailTokenExpires: expires,
      },
      benutzerinteraktionen: {
        letzteSuche: [],
        letzteSucheEntsorger: [],
        merkzettel: [],
      },
      messages: {
        empfangeneNachrichten: [],
        numberOfEmpfangeneNachrichten: 0,
        gesendeteNachrichten: [],
        numberOfGesendeteNachrichten: 0,
      },
      profile: {
        produzent: false,
        entsorger: false,
        logistik: false,
      },
    });

    return newUser as DocumentType<Benutzer>;
  }
}
