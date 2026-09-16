import { Prop } from "@nestjs/mongoose";
import { IsDate, IsString } from "class-validator";

export class Intervall {
    @Prop()
    @IsString()
    intervallOption: string;

    @Prop()
    @IsDate()
    dateStart: Date;

    @Prop()
    @IsDate()
    dateEnd: Date;
}