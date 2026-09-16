import { Prop } from "@nestjs/mongoose";
import { IsString } from "class-validator";

export class Personendaten {
  @Prop()
  @IsString()
  ansprechpartner: string;

  @Prop()
  @IsString()
  email: string;

  @Prop()
  @IsString()
  telefonnummer: string;
}
