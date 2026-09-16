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
import { InseratService } from "./inserat.service";
import { CreateInseratDto } from "./dto/create-inserat.dto";
import { UpdateInseratDto } from "./dto/update-inserat.dto";
import { AuthGuard } from "@nestjs/passport";
import { Benutzer } from "src/schemas/user.schema";
import { GetUser } from "src/unprotected/auth/get-user.decorator";
import { AdminGuard } from "src/unprotected/auth/admin.guard";



@Controller("inserat")
@UseGuards(AuthGuard())
export class InseratController {
  constructor(private readonly inseratService: InseratService) {}

  @Post()
  create(@GetUser() user: Benutzer, @Body() createInseratDto: CreateInseratDto) {
    return this.inseratService.create(user, createInseratDto);
  }

  @Get("all")
  findAll() {
    return this.inseratService.findAll();
  }


  @Get("userInserate")
  myInserate(@GetUser() user: Benutzer) {
    return this.inseratService.myInserate(user);
  }

  @Get("adminInserate")
  @UseGuards(AdminGuard)
  adminInserate() {
    return this.inseratService.getAllInserateForAdminPanel();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.inseratService.findOne(id);
  }


  @Patch(":id")
  update(@GetUser() user: Benutzer, @Param("id") id: string, @Body() updateInseratDto: UpdateInseratDto) {
    return this.inseratService.update(user, id, updateInseratDto);
  }

  @Delete("adminDeleteInserat/:id")
  @UseGuards(AdminGuard)
  adminDeleteInserat(@Param("id") id: string) {
    return this.inseratService.adminDeleteInserat(id);
  }

  @Delete(":id")
  remove(@GetUser() user: Benutzer, @Param("id") id: string) {
    return this.inseratService.remove(user, id);
  }
}
