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
import { OfTheDayCalendarService } from "./of-the-day-calendar.service";
import { WasteOfTheDayService } from "./waste-of-the-day.service";
import {
  CreateOfTheDayCalendarDto,
  GetOfTheDayCalendarDto,
} from "./dto/create-of-the-day-calendar.dto";
import { UpdateOfTheDayCalendarDto } from "./dto/update-of-the-day-calendar.dto";
import { AuthGuard } from "@nestjs/passport";
import { PassportModule } from "@nestjs/passport";
import { GetUser } from "src/unprotected/auth/get-user.decorator";
import { AdminGuard } from "src/unprotected/auth/admin.guard";
import { Benutzer } from "src/schemas/user.schema";
import { InseratNEST } from "src/schemas/inserat.schema";

@Controller("of-the-day-calendar")
export class OfTheDayCalendarController {
  constructor(
    private readonly ofTheDayCalendarService: OfTheDayCalendarService,
    private readonly wasteOfTheDayService: WasteOfTheDayService
  ) {}

  @Post()
  @UseGuards(AuthGuard())
  addBlockedDays(
    @GetUser() user: Benutzer,
    @Body() createOfTheDayCalendarDto: CreateOfTheDayCalendarDto
  ) {
    return this.ofTheDayCalendarService.addBlockedDays(
      createOfTheDayCalendarDto,
      user
    );
  }

  @Get("getWasteOfTheDayReservations")
  @UseGuards(AuthGuard(), AdminGuard)
  getAllWasteOfTheDayReservations() {
    return this.ofTheDayCalendarService.getAllReservedDays();
  }

  @Get("blockedDays/:type")
  getBlockedDays(@Param("type") typeOfTheDay: string) {
    return this.ofTheDayCalendarService.getBlockedDays(typeOfTheDay);
  }

  @Get("getWasteOfTheDay")
  getOfTheDay(): Promise<InseratNEST> {
    return this.wasteOfTheDayService.getWasteOfTheDay();
  }

  @Get("entsorgerOfTheDay")
  getEntsorgerOfTheDay() {
    return this.wasteOfTheDayService.getEntsorgerOfTheDay();
  }

  //Kalendereinträge sind Teil der administrativen Kalender-Verwaltung
  //(siehe CONTEXT.md/ADR-0001), deshalb admin-geschützt wie die
  //Reservierungs-Endpunkte.
  @Patch(":id")
  @UseGuards(AuthGuard(), AdminGuard)
  update(
    @Param("id") id: string,
    @Body() updateOfTheDayCalendarDto: UpdateOfTheDayCalendarDto
  ) {
    return this.ofTheDayCalendarService.update(id, updateOfTheDayCalendarDto);
  }

  @Patch("updateWasteReservation/:inseratID")
  @UseGuards(AuthGuard(), AdminGuard)
  updateWasteReservation(
    @Param("inseratID") inseratID: string,
    @Body("reservierterTag") reservierterTag: Date,
    @Body("freigegeben") freigegeben: boolean
  ): Promise<{message: string}> {
    return this.ofTheDayCalendarService.updateWasteReservation(
      inseratID,
      reservierterTag,
      freigegeben
    );
  }

  @Delete("deleteWasteOfTheDayReservations/:inseratID")
  @UseGuards(AuthGuard(), AdminGuard)
  deleteWasteOfTheDayReservations(@Param("inseratID") inseratID: string) {
    return this.ofTheDayCalendarService.deleteWasteReservation(inseratID);
  }

  @Delete(":id")
  @UseGuards(AuthGuard(), AdminGuard)
  remove(@Param("id") id: string) {
    return this.ofTheDayCalendarService.remove(id);
  }
}
