import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { EmailService } from "./email.service";
import { EmailDto, UserEmailDto } from "./dto/email.dto";
import { AuthGuard } from "@nestjs/passport";
import { Benutzer } from "src/schemas/user.schema";
import { GetUser } from "src/unprotected/auth/get-user.decorator";
import { Message } from "src/models/benutzer/message.model";

@Controller("email")
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  //Für Inserate

  //Eingeloggter User sendet eine Email
  @Post("sendEmail")
  @UseGuards(AuthGuard())
  sendMail(@GetUser() user: Benutzer, @Body() emailDto: UserEmailDto): Promise<{message: string, updateMessage: Message} | {message: string}> {
    return this.emailService.getUserAndSendMail(emailDto, user);
  }

  //nicht eingeloggter User sendet eine Email
  @Post("sendAnonymEmail")
  sendAnonymMail(@Body() emailDto: EmailDto): Promise<{message: string}>{
    return this.emailService.getAnonymAndSendMail(emailDto);
  }

  //Für Entsorger-Anschreiben
  @Post("sendEntsorgerEmail")
  @UseGuards(AuthGuard())
  sendEntsorgerMail(@GetUser() user: Benutzer, @Body() emailDto: UserEmailDto): Promise<{message: string, updateMessage: Message} | {message: string}> {
    return this.emailService.getUserAndSendEntsorgerMail(emailDto, user);
  }

  //nicht eingeloggter User sendet eine Email
  @Post("sendAnonymEntsorgerEmail")
  sendEntsorgerAnonymMail(@Body() emailDto: EmailDto): Promise<{message: string}>{
    return this.emailService.getAnonymAndSendEntsorgerMail(emailDto);
  }

  @Post("feedback")
  @UseGuards(AuthGuard())
  sendFeedback(@GetUser() user:Benutzer, @Body() emailDto: EmailDto) {
    return this.emailService.feedbackEmail(user, emailDto);
  }


  //alte Methode

  @Post("sendEmailPrivatUser")
  sendMailToPrivate(@Body() emailDto: EmailDto) {
    return this.emailService.sendEmailToPrivateUser(emailDto);
  }

  //Prüfen, ob das alle Email Templates sind oder ob noch welche für angemeldete User gebraucht werden


}
