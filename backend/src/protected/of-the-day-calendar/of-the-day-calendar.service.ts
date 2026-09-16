import {
  ConflictException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { CreateOfTheDayCalendarDto } from "./dto/create-of-the-day-calendar.dto";
import { UpdateOfTheDayCalendarDto } from "./dto/update-of-the-day-calendar.dto";
import { InjectModel } from "@nestjs/mongoose";
import { ofTheDayCalendar } from "src/schemas/ofTheDayCalendar.schema";
import { Model } from "mongoose";
import { InseratNEST } from "src/schemas/inserat.schema";
import { MailingService } from "src/utils/mailing/mailing.service";
import { Day } from "src/models/calendar/day.model";
import { Benutzer } from "src/schemas/user.schema";

/**
 * Verwaltet den Of-the-Day-Kalender: Tage buchen, gebuchte Tage ausliefern,
 * Reservierungen freigeben und löschen. Welches Inserat heute als Waste of
 * the Day ausgespielt wird, entscheidet der WasteOfTheDayService.
 */
@Injectable()
export class OfTheDayCalendarService {
  private readonly logger = new Logger(OfTheDayCalendarService.name);

  constructor(
    @InjectModel(ofTheDayCalendar.name)
    private ofTheDayCalendarModel: Model<ofTheDayCalendar>,
    @InjectModel(InseratNEST.name) private inseratModel: Model<InseratNEST>,
    private mailingService: MailingService
  ) {}

  //Blockt einen oder mehrere Tage für einen bestimmten Typ
  async addBlockedDays(
    createOfTheDayCalendarDto: CreateOfTheDayCalendarDto,
    user: Benutzer
  ): Promise<{ message: string }> {
    const { inseratID, dates, type } = createOfTheDayCalendarDto;
    type.toLocaleLowerCase();
    try {
      // Find existing calendar entry for the given type and year
      let calendarEntry = await this.ofTheDayCalendarModel.findOne({
        type: type,
      });

      // If no entry exists, create a new one
      if (!calendarEntry) {
        calendarEntry = new this.ofTheDayCalendarModel({
          type: type,
          blockedDays: [] as Day[],
        });
      }

      const bestellnummer = `${new Date().getTime()}`;

      // Bewusst for...of statt forEach: der Duplikat-Check muss den Aufrufer
      // erreichen und die Buchung abbrechen (siehe Ticket #7).
      for (const date of dates) {
        // Convert date string to Date object
        const dateParts = date.split(".");
        const dateObject = new Date(
          Date.UTC(
            +dateParts[2], // Jahr
            +dateParts[1] - 1, // Monat (0-basiert)
            +dateParts[0], // Tag
            0,
            0,
            0,
            0
          )
        );

        const dayEntry = {
          day: dateObject,
          inseratID: inseratID,
          freigegeben: false,
          bestellnummer: bestellnummer,
        };

        // Check if day is already blocked
        const existingDay = calendarEntry.blockedDays.find(
          (day) => day.day.getTime() === dateObject.getTime()
        );

        if (existingDay) {
          throw new ConflictException(
            `Der Tag ${this.formatDate(dateObject)} ist bereits gebucht.`
          );
        }

        calendarEntry.blockedDays.push(dayEntry);
        calendarEntry.markModified("blockedDays");
      }

      await calendarEntry.save();

      if (type === "waste") {
        await this.informiereUeberBuchung(
          user,
          inseratID,
          type,
          dates,
          bestellnummer
        );
      }

      return {
        message: `Du hast erfolgreich einen ${type} of the Day gebucht. Wir haben dir eine Bestätigung per E-Mail geschickt.`,
      };
    } catch (error) {
      // Fachliche Fehler (z. B. bereits gebuchter Tag) unverändert
      // durchreichen, statt sie zu einer 500 zu verschlucken.
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(
        `addBlockedDays fehlgeschlagen (type=${type}, inserat=${inseratID})`,
        error instanceof Error ? error.stack : String(error)
      );
      throw new InternalServerErrorException(
        "Beim Speichern deiner Bestellung ist ein Fehler unterlaufen. Bitte wende dich an das Team von www.waste-connect.de."
      );
    }
  }

  /** Bestätigung an den Buchenden und Information an das waste-connect-Team. */
  private async informiereUeberBuchung(
    user: Benutzer,
    inseratID: string,
    type: string,
    dates: string[],
    bestellnummer: string
  ) {
    const inserat = await this.inseratModel.findById(inseratID).exec();

    const abfallbezeichnung = inserat?.inseratBeschreibung.abfallbezeichnung;

    const blockedDaysString = dates.map((day) => day);
    this.mailingService.sendBuchungConfirmation(
      user.email,
      abfallbezeichnung,
      type,
      blockedDaysString,
      bestellnummer
    );
    this.mailingService.sendBuchungToAdmin(
      user.firmendaten.ansprechpartner,
      user.firmendaten.firmenname,
      user.email,
      abfallbezeichnung,
      inseratID,
      type,
      blockedDaysString,
      bestellnummer
    );
  }

  async getBlockedDays(type: string): Promise<Day[]> {
    // const year = new Date().getFullYear();
    type.toLocaleLowerCase();
    let calendarData = await this.ofTheDayCalendarModel
      .find({ type: type })
      .exec();

    if (!calendarData || calendarData.length === 0) {
      const newCalendar = new this.ofTheDayCalendarModel({
        type: type,
        blockedDays: [] as Day[],
      });
      await newCalendar.save();
      calendarData = [newCalendar];
    }

    let blockedDays: Day[] = [];
    const today = new Date();
    const todayUTC = new Date(
      Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
    );
    todayUTC.setUTCHours(0, 0, 0, 0); // Setzt die Zeit auf 00:00:00.000 UTC
    calendarData.forEach((calendar) => {
      calendar.blockedDays.forEach((day) => {
        const dayDate = day.day;
        if (dayDate >= todayUTC) {
          blockedDays.push(day);
        }
      });
    });

    return blockedDays;
  }

  private formatDate(date: Date): string {
    date.setHours(0, 0, 0, 0);
    return `${("0" + date.getDate()).slice(-2)}.${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}.${date.getFullYear()}`;
  }

  async getAllReservedDays(): Promise<Day[]> {
    const now = new Date();
    const monthAgo = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth() - 1,
        now.getUTCDate(),
        0,
        0,
        0,
        0
      )
    );

    const calendarData = await this.ofTheDayCalendarModel.aggregate([
      { $unwind: "$blockedDays" },
      {
        $match: {
          type: "waste",
          "blockedDays.inseratID": { $ne: null },
          "blockedDays.day": { $gte: monthAgo },
        },
      },
    ]);

    const blockedDays = calendarData.map((data) => data.blockedDays);

    return blockedDays;
  }

  async updateWasteReservation(
    inseratID: string,
    reservierterTag: Date,
    freigegeben: boolean
  ): Promise<{ message: string }> {
    const convertTagDate = new Date(reservierterTag);
    const reservierterTagDate = new Date(
      Date.UTC(
        convertTagDate.getUTCFullYear(),
        convertTagDate.getUTCMonth(),
        convertTagDate.getUTCDate(),
        0,
        0,
        0,
        0
      )
    );

    const updateResult = await this.ofTheDayCalendarModel.updateOne(
      {
        blockedDays: {
          $elemMatch: {
            inseratID: inseratID,
            day: reservierterTagDate,
          },
        },
      },
      { $set: { "blockedDays.$.freigegeben": freigegeben } }
    );

    if (updateResult.modifiedCount === 0) {
      throw new NotFoundException("Eintrag nicht gefunden");
    }

    return { message: "Reservierung erfolgreich aktualisiert" };
  }

  async deleteWasteReservation(inseratID: string) {
    const updateResult = await this.ofTheDayCalendarModel.updateOne(
      { "blockedDays.inseratID": inseratID },
      { $pull: { blockedDays: { inseratID: inseratID } } }
    );

    if (updateResult.modifiedCount === 0) {
      this.logger.log(
        `Keine Reservierung zum Löschen gefunden (inserat=${inseratID})`
      );
      return;
    }

    this.logger.log(`Reservierung gelöscht (inserat=${inseratID})`);
    return { message: "Reservierung erfolgreich gelöscht" };
  }

  update(id: string, updateOfTheDayCalendarDto: UpdateOfTheDayCalendarDto) {
    return `This action updates a #${id} ofTheDayCalendar`;
  }

  remove(id: string) {
    return `This action removes a #${id} ofTheDayCalendar`;
  }
}
