import { Module } from "@nestjs/common";
import { OfTheDayCalendarService } from "./of-the-day-calendar.service";
import { WasteOfTheDayService } from "./waste-of-the-day.service";
import { OfTheDayCalendarController } from "./of-the-day-calendar.controller";
import { ofTheDayCalendarSchema } from "src/schemas/ofTheDayCalendar.schema";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MailingModule } from "src/utils/mailing/mailing.module";
import { AuthModule } from "src/unprotected/auth/auth.module";
import { InseratSchema } from "src/schemas/inserat.schema";
import { InseratModule } from "../inserat/inserat.module";
import { BenutzerModule } from "../benutzer/benutzer.module";
import { EntsorgerModule } from "../entsorger/entsorger.module";
import { LogistikerModule } from "../logistiker/logistiker.module";

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
      { name: "ofTheDayCalendar", schema: ofTheDayCalendarSchema },
      { name: "InseratNEST", schema: InseratSchema },
    ]),
  ],
  controllers: [OfTheDayCalendarController],
  providers: [OfTheDayCalendarService, WasteOfTheDayService],
})
export class OfTheDayCalendarModule {}
