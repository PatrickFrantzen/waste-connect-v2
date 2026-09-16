import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LogistikerService } from './logistiker.service';
import { CreateLogistikerDto } from './dto/create-logistiker.dto';
import { UpdateLogistikerDto } from './dto/update-logistiker.dto';
import { AuthGuard } from '@nestjs/passport';
import { Benutzer } from 'src/schemas/user.schema';
import { GetUser } from 'src/unprotected/auth/get-user.decorator';


@Controller('logistiker')
@UseGuards(AuthGuard())
export class LogistikerController {
  constructor(private readonly logistikerService: LogistikerService) {}

  //Analog zum Entsorger: die Benutzer-ID stammt aus dem Token.
  @Post()
  create(@GetUser() user: Benutzer) {
    return this.logistikerService.create(user._id);
  }

  @Get("all")
  findAll() {
    return this.logistikerService.findAll();
  }

  @Get()
  findOne(@GetUser() user: Benutzer) {
    return this.logistikerService.findOneProtected(user._id);
  }

  @Patch()
  update(@GetUser() user: Benutzer, @Body() updateLogistikerDto: UpdateLogistikerDto) {
    return this.logistikerService.update(user, updateLogistikerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logistikerService.remove(id);
  }
}
