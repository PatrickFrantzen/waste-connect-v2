import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EntsorgerService } from './entsorger.service';
import { UpdateEntsorgerDto } from './dto/update-entsorger.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/unprotected/auth/get-user.decorator';
import { Benutzer } from 'src/schemas/user.schema';


@Controller('entsorger')
@UseGuards(AuthGuard())
export class EntsorgerController {
  constructor(private readonly entsorgerService: EntsorgerService) {}

  //Die Benutzer-ID kommt aus dem Token des angemeldeten Benutzers, nicht aus
  //dem Request-Body: ein Benutzer kann nur sein eigenes Profil anlegen.
  @Post()
  create(@GetUser() user: Benutzer) {
    return this.entsorgerService.create(user._id);
  }

  @Get("all")
  findAll() {
    return this.entsorgerService.findAll();
  }

  @Get()
  findOne(@GetUser() user: Benutzer,) {
    return this.entsorgerService.findOneProtected(user._id);
  }

  @Patch()
  update(@GetUser() user: Benutzer, @Body() updateEntsorgerDto: UpdateEntsorgerDto) {
    return this.entsorgerService.update(user, updateEntsorgerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entsorgerService.remove(id);
  }
}
