import { Prop } from "@nestjs/mongoose";
import { IsArray, IsString } from "class-validator";

export class LogistikerBeschreibung {

@Prop()
@IsString()
befoerderernummer: string;

@Prop()
@IsArray()
fuhrpark: string[];

@Prop()
@IsArray()
dienstleistungen: string[];

@Prop()
@IsString()
besonderheiten: string;

@Prop()
@IsArray()
logistik: string[]

@Prop()
@IsArray()
logistikdienstleistungen: string[]
}