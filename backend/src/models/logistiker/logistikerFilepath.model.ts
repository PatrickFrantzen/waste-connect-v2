import { Prop } from "@nestjs/mongoose"
import { IsArray } from "class-validator"

export class LogistikerFilepath {
    @Prop()
    @IsArray()
    logoPath: string[]

    @Prop()
    @IsArray()
    zertifikatePath: string[]

    @Prop()
    @IsArray()
    genehmigungenPath: string[]
}