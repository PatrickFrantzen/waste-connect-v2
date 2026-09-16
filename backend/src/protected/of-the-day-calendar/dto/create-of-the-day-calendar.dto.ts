import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  Matches,
} from "class-validator";

/** Datumsformat, das der OfTheDayCalendarService parst: TT.MM.JJJJ. */
export const DATUM_MUSTER = /^\d{2}\.\d{2}\.\d{4}$/;

export class CreateOfTheDayCalendarDto {
  @IsString()
  @IsNotEmpty()
  inseratID: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @Matches(DATUM_MUSTER, {
    each: true,
    message: "Jedes Datum muss im Format TT.MM.JJJJ vorliegen.",
  })
  dates: string[];

  @IsString()
  @IsNotEmpty()
  type: string;
}

export class GetOfTheDayCalendarDto {
  @IsString()
  @IsNotEmpty()
  type: string;
}
