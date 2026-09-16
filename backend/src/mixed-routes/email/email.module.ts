import { Module } from "@nestjs/common";
import { EmailService } from "./email.service";
import { EmailController } from "./email.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { MailingModule } from "src/utils/mailing/mailing.module";
import { InseratModule } from "src/protected/inserat/inserat.module";
import { LogistikerModule } from "src/protected/logistiker/logistiker.module";
import { EntsorgerModule } from "src/protected/entsorger/entsorger.module";
import { ConfigModule } from "@nestjs/config";
import { BenutzerSchema } from "src/schemas/user.schema";
import { AuthModule } from "src/unprotected/auth/auth.module";
import { BenutzerModule } from "src/protected/benutzer/benutzer.module";

@Module({
  imports: [
    InseratModule,
    BenutzerModule,
    EntsorgerModule,
    LogistikerModule,
    MailingModule,
    ConfigModule,
    AuthModule,
    MongooseModule.forFeature([
      { name: "Benutzer", schema: BenutzerSchema},
    ]),
  ],
  controllers: [EmailController],
  providers: [
    EmailService
  ],
})
export class EmailModule {}
