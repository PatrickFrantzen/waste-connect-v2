import { PartialType } from "@nestjs/mapped-types";
import { IsObject } from "class-validator";
import { InseratBeschreibung } from "src/models/inserat/inseratBeschreibung.model";
import { InseratFilepath } from "src/models/inserat/inseratFilepath.model";
import { InseratLogistik } from "src/models/inserat/inseratLogistik.model";
import { InseratStandort } from "src/models/inserat/inseratStandort.model";
import { InseratNEST } from "src/schemas/inserat.schema";

export class CreateInseratDto extends PartialType(InseratNEST) {

    @IsObject()
    inseratBeschreibung: InseratBeschreibung;

    @IsObject()
    inseratStandort: InseratStandort;

    @IsObject()
    inseratLogistik: InseratLogistik;

    @IsObject()
    inseratFilepath: InseratFilepath;


}
