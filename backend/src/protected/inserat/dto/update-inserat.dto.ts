import { PartialType } from '@nestjs/mapped-types';
import { CreateInseratDto } from './create-inserat.dto';
import { InseratBeschreibung } from 'src/models/inserat/inseratBeschreibung.model';
import { IsObject } from 'class-validator';
import { InseratStandort } from 'src/models/inserat/inseratStandort.model';
import { InseratLogistik } from 'src/models/inserat/inseratLogistik.model';

export class UpdateInseratDto extends PartialType(CreateInseratDto) {

    @IsObject()
    inseratBeschreibung: InseratBeschreibung;

    @IsObject()
    inseratStandort: InseratStandort;

    @IsObject()
    inseratLogistik: InseratLogistik;

}
