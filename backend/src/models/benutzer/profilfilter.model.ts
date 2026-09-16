import { Prop } from "@nestjs/mongoose";
import { IsOptional, IsString } from "class-validator";
import { isNull } from "util";

export class Inseratfilter {
    @Prop()
    @IsOptional()
    @IsString()
    abfallursprung?: string | null;

    @Prop()
    @IsOptional()
    @IsString()
    abfallschluesselnummer?: string | null; 

    @Prop()
    @IsOptional()
    @IsString()
    abfallbezeichnung?: string | null;

    @Prop()
    @IsOptional()
    @IsString()
    standort_Bundesland?: string | null;

    @Prop()
    @IsOptional()
    @IsString()
    standort_Gemeinde?: string | null | undefined;

    @Prop()
    @IsOptional()
    @IsString()
    standort_Postleitzahl?: string | null | undefined;

    @Prop()
    @IsOptional()
    @IsString()
    inseratId?: string | null | undefined;
}

export class Entsorgerfilter {
    @Prop()
    @IsString()
    standort_Bundesland?: string;

    @Prop()
    @IsString()
    standort_Gemeinde?: string;

    @Prop()
    @IsString()
    standort_Postleitzahl?: string;

    @Prop()
    @IsString()
    taetigkeitsbereiche?: string;

    @Prop()
    @IsString()
    dienstleistungen?: string;

    @Prop()
    @IsString()
    logistik?: string;

    @Prop()
    @IsString()
    abfallursprung?: string;

    @Prop()
    @IsString()
    abfallschluesselnummer?: string;

    @Prop()
    @IsString()
    zertifikate?: string
}