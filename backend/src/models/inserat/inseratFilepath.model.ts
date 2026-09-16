import { Prop } from "@nestjs/mongoose";
import { IsArray, IsString } from "class-validator";

export class InseratFilepath {
    @Prop()
    @IsArray()
    bildpath: string[];
  
    @Prop()
    @IsArray()
    analysepath: string[];

}