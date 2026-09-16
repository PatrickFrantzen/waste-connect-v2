import { PartialType } from '@nestjs/mapped-types';
import { CreateOfTheDayCalendarDto } from './create-of-the-day-calendar.dto';

export class UpdateOfTheDayCalendarDto extends PartialType(CreateOfTheDayCalendarDto) {}
