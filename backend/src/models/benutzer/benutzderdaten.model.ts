import { Prop } from "@nestjs/mongoose";
import { IsBoolean, IsDate, IsString } from "class-validator";

export class Benutzerdaten {
    @Prop()
    @IsBoolean()
    firstLogin: boolean;

    @Prop()
    @IsBoolean()
    emailConfirmed: boolean;

    @Prop()
    @IsString()
    temporaryPassword: string;

    @Prop()
    @IsDate()
    accoutCreated: Date;

    @Prop()
    @IsDate()
    resetPasswordExpires: Date;

    @Prop()
    @IsString()
    emailToken: string;

    @Prop()
    @IsDate()
    emailTokenExpires: Date;
}
