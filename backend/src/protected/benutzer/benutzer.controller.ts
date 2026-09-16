import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from "@nestjs/common";
import { BenutzerService } from "./benutzer.service";
import { UpdateBenutzerDto } from "./dto/update-benutzer.dto";
import { Benutzer } from "src/schemas/user.schema";
import { GetUser } from "src/unprotected/auth/get-user.decorator";
import { AuthGuard } from "@nestjs/passport";
import { Entsorgerfilter, Inseratfilter } from "src/models/benutzer/profilfilter.model";
import { InseratNEST } from "src/schemas/inserat.schema";
import { PaginatorDto } from "../inserat/dto/paginator-inserat.dto";
import { parseQueryJson } from "src/common/query-json";

@Controller("benutzer")
@UseGuards(AuthGuard())
export class BenutzerController {
  constructor(private readonly benutzerService: BenutzerService) {}

  @Get("/firmendaten")
  getFirmendaten(@GetUser() user: Benutzer) {
    return this.benutzerService.getFirmendaten(user);
  }

  @Get("/benutzerinteraktionen")
  getBenutzerinteraktionen(@GetUser() user: Benutzer) {
    return this.benutzerService.getBenutzerinteraktionen(user);
  }

  @Get("/profile")
  getProfile(@GetUser() user: Benutzer) {
    return this.benutzerService.getProfile(user);
  }

  @Get("/private")
  getPrivate(@GetUser() user: Benutzer) {
    return this.benutzerService.getPrivate(user);
  }

  @Get("/merkzettel")
  getMerkzettel(@GetUser() user: Benutzer) {
    return this.benutzerService.getMerkzettel(user);
  }

  @Get("/letzteSucheInserate")
  getLetzteSucheInserat(@GetUser() user: Benutzer) {
    return this.benutzerService.getLetzteSucheInserat(user);
  }

  @Get("/getMessages")
  getMessages(@GetUser() user: Benutzer) {
    return this.benutzerService.getMessages(user);
  }

  @Get("/getMessagesByStatusForPaginator")
 async getMessagesByStatusForPaginator(
    @GetUser() user: Benutzer,
    @Query("status") status: "gesendete" | "empfangene",
    @Query('paginatorDto') paginatorString: string,
  ) {
    const paginatorDto = parseQueryJson<PaginatorDto>(
      paginatorString,
      "paginatorDto"
    );
    return this.benutzerService.getMessagesByStatusForPaginator(
      user,
      status,
      paginatorDto
    );
  }

  @Get("/checkMerkzettel")
  checkMerkzettel(@GetUser() user: Benutzer, @Query("inseratId") inseratId: string) {
    return this.benutzerService.checkMerkzettel(user, inseratId);
  }

  @Patch("/updateUser")
  update(
    @GetUser() user: Benutzer,
    @Body() updateBenutzerDto: UpdateBenutzerDto
  ) {
    return this.benutzerService.update(user, updateBenutzerDto);
  }

  //Update der Benutzerinteraktionen
  @Patch("/updateInseratfilter")
  updateInseratfilter(
    @GetUser() user: Benutzer,
    @Body("inseratfilter") inseratfilter: Inseratfilter
  ) {
    return this.benutzerService.updateLetzteSuche(user, inseratfilter);
  }

  @Patch("/updateEntsorgerfilter")
  updateEntsorgerfilter(
    @GetUser() user: Benutzer,
    @Body("entsorgerfilter") entsorgerfilter: Entsorgerfilter
  ) {
    return this.benutzerService.updateLetzteSucheEntsorger(user, entsorgerfilter);
  }

  @Patch("/updateMerkzettel")
  updateMerkzettel(
    @GetUser() user: Benutzer,
    @Body("inseratId") inseratId: string
  ) {
    return this.benutzerService.updateMerkzettel(user, inseratId);
  }

  @Delete()
  remove(@GetUser() user: Benutzer) {
    return this.benutzerService.remove(user._id.toString());
  }

  @Delete("/removeFromMerkzettel")
  removeFromMerkzettel(@GetUser() user: Benutzer, @Body("inseratid") inseratId: string) {
    return this.benutzerService.removeFromMerkzettel(user, inseratId);
  }
}
