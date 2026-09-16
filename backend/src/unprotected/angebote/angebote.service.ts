import { Injectable } from '@nestjs/common';
import { CreateAngeboteDto } from './dto/create-angebote.dto';
import { UpdateAngeboteDto } from './dto/update-angebote.dto';

@Injectable()
export class AngeboteService {
  create(createAngeboteDto: CreateAngeboteDto) {
    return 'This action adds a new angebote';
  }

  findAll() {
    return `This action returns all angebote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} angebote`;
  }

  update(id: number, updateAngeboteDto: UpdateAngeboteDto) {
    return `This action updates a #${id} angebote`;
  }

  remove(id: number) {
    return `This action removes a #${id} angebote`;
  }
}
