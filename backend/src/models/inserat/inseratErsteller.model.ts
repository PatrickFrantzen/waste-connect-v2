import { Prop } from "@nestjs/mongoose"
import { IsBoolean, IsEmail, IsString } from "class-validator"

export class InseratErsteller {
    @Prop()
    @IsString()
    firma: string;

    @Prop()
    @IsString()
    adresse: string;

    @Prop()
    @IsString()
    webseite: string;

    @Prop()
    @IsString()
    telefonnummer: string;

    @Prop()
    @IsEmail()
    email: string;

    @Prop()
    @IsString()
    ansprechpartner: string;

    @Prop()
    @IsBoolean()
    privateModus: boolean
}
