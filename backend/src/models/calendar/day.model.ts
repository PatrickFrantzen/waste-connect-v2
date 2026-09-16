import { Prop } from "@nestjs/mongoose";
import { IsBoolean, IsString } from "class-validator";

export class Day {
    @Prop()
    @IsString()   
    day: Date;

    @Prop()
    @IsString()
    inseratID: string;

    @Prop()
    @IsBoolean()
    freigegeben: boolean;

    @Prop()
    @IsString()
    bestellnummer: string;
}