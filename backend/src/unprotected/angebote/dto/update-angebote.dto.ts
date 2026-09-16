import { PartialType } from '@nestjs/mapped-types';
import { CreateAngeboteDto } from './create-angebote.dto';

export class UpdateAngeboteDto extends PartialType(CreateAngeboteDto) {}
