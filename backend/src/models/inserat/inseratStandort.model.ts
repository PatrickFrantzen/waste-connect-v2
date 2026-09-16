import { Prop } from "@nestjs/mongoose";
import { IsString } from "class-validator";

export class InseratStandort {
    @Prop()
    @IsString()
    standort_Bundesland: string;
  
    @Prop()
    @IsString()
    standort_Gemeinde: string;
  
    @Prop()
    @IsString()
    standort_Postleitzahl: string;
}