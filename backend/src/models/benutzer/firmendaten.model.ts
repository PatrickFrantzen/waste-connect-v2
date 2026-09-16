import { Prop } from "@nestjs/mongoose";
import { IsArray, IsString } from "class-validator";

export class Firmendaten {
    @Prop()
    @IsString()
    firmenname: string;

    @Prop()
    @IsString()
    firmenadresse: string;

    @Prop()
    @IsString()
    firmenwebseite: string;

    @Prop()
    @IsString()
    telefonnummer: string;

    @Prop()
    @IsString()
    ansprechpartner: string;

    @Prop()
    @IsString()
    stadt: string;

    @Prop()
    @IsString()
    postleitzahl: string;

    @Prop()
    @IsString()
    bundesland: string;

    @Prop()
    @IsArray()
    standortFavoriten: standortFavorit[];
}

export class standortFavorit {
    @Prop()
    @IsString()
    bundesland: string;

    @Prop()
    @IsString()
    stadt: string;

    @Prop()
    @IsString()
    postleitzahl: string;
}