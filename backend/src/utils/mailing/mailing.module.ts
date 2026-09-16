import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MailingService } from "./mailing.service";

/**
 * Besitzendes Modul für den MailingService. Vorher wurde der Service in sechs
 * Feature-Modulen als lokaler Provider neu deklariert (siehe Issue #8), was pro
 * Modul eine eigene Instanz samt eigenem Nodemailer-Transport erzeugt hat.
 */
@Module({
  imports: [ConfigModule],
  providers: [MailingService],
  exports: [MailingService],
})
export class MailingModule {}
