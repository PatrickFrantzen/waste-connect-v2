import { Module } from "@nestjs/common";
import { AngeboteService } from "./angebote.service";
import { AngeboteController } from "./angebote.controller";
import { LogistikerModule } from "src/protected/logistiker/logistiker.module";
import { InseratModule } from "src/protected/inserat/inserat.module";
import { EntsorgerModule } from "src/protected/entsorger/entsorger.module";
import { MailingModule } from "src/utils/mailing/mailing.module";
import { ConfigModule } from "@nestjs/config";
import { BenutzerModule } from "src/protected/benutzer/benutzer.module";

@Module({
  imports: [
    BenutzerModule,
    LogistikerModule,
    MailingModule,
    ConfigModule,
    InseratModule,
    EntsorgerModule
  ],
  controllers: [AngeboteController],
  providers: [AngeboteService],
})
export class AngeboteModule {}
