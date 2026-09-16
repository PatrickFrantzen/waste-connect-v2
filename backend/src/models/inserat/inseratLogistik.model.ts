import { Prop } from "@nestjs/mongoose";
import { IsString } from "class-validator";

export class InseratLogistik {
    @Prop()
    @IsString()
    logistik: string;
  
    @Prop()
    @IsString()
    verladung: string;
  
    @Prop()
    @IsString()
    verpackung: string;
  
    @Prop()
    @IsString()
    gewicht: string;
}