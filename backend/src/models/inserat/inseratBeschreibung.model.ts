import { Prop } from "@nestjs/mongoose";
import { Intervall } from "./inseratintervall.model";
import { IsObject, IsString } from "class-validator";

export class InseratBeschreibung {
    @Prop()
    @IsString()
    abfallbezeichnung: string;
  
    @Prop()
    @IsString()
    abfallursprung: string;
  
    @Prop()
    @IsString()
    abfallschluesselnummer: string;
  
    @Prop()
    @IsString()
    abfallmenge: string;
  
    @Prop()
    @IsString()
    einheit: string;
  
    @Prop({ type: Intervall, default: {} })
    @IsObject()
    intervall: Intervall;

    @Prop()
    @IsString()
    beschreibung: string;
}

