import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ofTheDayCalendar } from "src/schemas/ofTheDayCalendar.schema";
import { InseratNEST } from "src/schemas/inserat.schema";
import { InseratService } from "../inserat/inserat.service";

/**
 * Wählt das Inserat aus, das heute als "Waste of the Day" ausgespielt wird:
 * die freigegebene Buchung des Tages, sonst ein zufälliges Inserat.
 * Aus dem OfTheDayCalendarService herausgelöst (Ticket #6), der damit nur
 * noch den Kalender selbst verwaltet.
 */
@Injectable()
export class WasteOfTheDayService {
  private readonly logger = new Logger(WasteOfTheDayService.name);

  constructor(
    @InjectModel(ofTheDayCalendar.name)
    private ofTheDayCalendarModel: Model<ofTheDayCalendar>,
    @InjectModel(InseratNEST.name) private inseratModel: Model<InseratNEST>,
    private inseratService: InseratService
  ) {}

  async getWasteOfTheDay(): Promise<InseratNEST> {
    const today = new Date();
    const todayUTC = new Date(
      Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
    );
    todayUTC.setUTCHours(0, 0, 0, 0); // Setzt die Zeit auf 00:00:00.000 UTC

    try {
      const calendarData = await this.ofTheDayCalendarModel.findOne({
        type: "waste",
        blockedDays: {
          $elemMatch: {
            day: { $gte: todayUTC },
          },
        },
      });

      if (!calendarData) {
        return this.getRandomInserat();
      }

      const blockedDay = calendarData.blockedDays.find((day) => {
        const dayDate = new Date(day.day);
        const dayUTC = new Date(
          Date.UTC(dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate())
        );
        const todayUTC = new Date(
          Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
        );

        return (
          dayUTC.getTime() === todayUTC.getTime() && day.freigegeben === true
        );
      });

      if (!blockedDay) {
        return this.getRandomInserat();
      }

      // Inserat muss modifiziert werden wenn User privat ist
      let inserat: InseratNEST = await this.inseratModel
        .findById(blockedDay.inseratID)
        .select("-user")
        .exec();

      return (inserat = this.inseratService.modifyPrivateInserate([inserat])[0]);
    } catch (error) {
      // Bewusst nicht fatal: schlägt die Kalenderabfrage fehl, wird statt
      // einer Fehlerseite ein zufälliges Inserat ausgespielt.
      this.logger.warn(
        `Waste of the Day konnte nicht ermittelt werden: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      return this.getRandomInserat();
    }
  }

  async getRandomInserat() {
    const count = await this.inseratModel.countDocuments().exec();
    const random = Math.floor(Math.random() * count);
    let inserat: InseratNEST = await this.inseratModel
      .findOne()
      .skip(random)
      .select("-user")
      .exec();

    inserat = this.inseratService.modifyPrivateInserate([inserat])[0];
    return inserat;
  }

  async getEntsorgerOfTheDay() {
    return "This action returns the entsorger of the day";
  }
}
