import { IsArray, IsObject, IsOptional } from 'class-validator';
import { Firmendaten } from 'src/models/benutzer/firmendaten.model';
import { Personendaten } from 'src/models/entsorger/personendaten.model';
import { LogistikerBeschreibung } from 'src/models/logistiker/logistikerBeschreibung.model';
import { AvvEntry } from 'src/schemas/avvEntries.schema';

/**
 * Body von `PATCH /logistiker`. Wie beim Entsorger wird das Profil
 * abschnittsweise gespeichert, deshalb ist jeder Abschnitt optional.
 */
export class UpdateLogistikerDto {
    @IsOptional()
    @IsObject()
    firmendaten: Firmendaten;

    @IsOptional()
    @IsObject()
    logistikerdaten: Personendaten;

    @IsOptional()
    @IsObject()
    logistikerBeschreibung: LogistikerBeschreibung;

    @IsOptional()
    @IsObject()
    avv: Map<string, AvvEntry>;

    @IsOptional()
    @IsArray()
    avvZusammenfassung: string[];
}
