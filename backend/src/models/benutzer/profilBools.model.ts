import { Prop } from "@nestjs/mongoose";
import { IsBoolean } from "class-validator";

export class ProfilBools {

    @Prop()
    @IsBoolean()
    produzent: boolean;

    @Prop()
    @IsBoolean()
    entsorger: boolean;

    @Prop()
    @IsBoolean()
    logistik: boolean;
}