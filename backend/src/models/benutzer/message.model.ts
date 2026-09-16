import { Prop } from "@nestjs/mongoose"
import { IsArray, IsOptional, IsString } from "class-validator"

export class Message {

    @Prop()
    @IsString()
    subject: string;
    
    @Prop()
    @IsString()
    message: string;

    @Prop()
    @IsString()
    @IsOptional()
    emailadresseOfEmpfaenger?: string;

    @Prop()
    @IsString()
    @IsOptional()
    emailadresseOfSender?: string;

    @Prop()
    @IsString()
    status: string;

    @Prop()
    @IsString()
    date: string;
}

export class MessageObject {
    @Prop()
    @IsArray()
    empfangeneNachrichten: Message[];
    numberOfEmpfangeneNachrichten: number;
    gesendeteNachrichten: Message[];
    numberOfGesendeteNachrichten: number;
}