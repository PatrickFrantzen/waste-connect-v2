import { Prop } from "@nestjs/mongoose"
import { IsArray, IsString } from "class-validator"

export class EntsorgerBeschreibung {
    @Prop()
    @IsArray()
    taetigkeitsbereich: string[];

    @Prop()
    @IsArray()
    dienstleistungen: string[];

    @Prop()
    @IsString()
    besonderheiten: string;

    @Prop()
    @IsArray()
    logistik: string[];

    @Prop()
    @IsArray()
    zertifikatsbestaetigungen: string[];
}