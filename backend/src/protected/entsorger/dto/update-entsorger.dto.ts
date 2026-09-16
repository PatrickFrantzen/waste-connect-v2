import { IsArray, IsObject, IsOptional } from 'class-validator';
import { Firmendaten } from 'src/models/benutzer/firmendaten.model';
import { Personendaten } from 'src/models/entsorger/personendaten.model';
import { EntsorgerBeschreibung } from 'src/models/entsorger/entsorgerBeschreibung.model';
import { AvvEntry } from 'src/schemas/avvEntries.schema';

/**
 * Body von `PATCH /entsorger`. Das Profil wird abschnittsweise gespeichert,
 * deshalb ist jeder Abschnitt optional – aber wenn er mitgeschickt wird,
 * muss er die richtige Grundform haben (Objekt bzw. Liste).
 */
export class UpdateEntsorgerDto {
    @IsOptional()
    @IsObject()
    firmendaten: Firmendaten;

    @IsOptional()
    @IsObject()
    entsorgerdaten: Personendaten;

    @IsOptional()
    @IsObject()
    entsorgerBeschreibung: EntsorgerBeschreibung;

    @IsOptional()
    @IsArray()
    avv: { [key: string]: AvvEntry }[];

    @IsOptional()
    @IsArray()
    avvZusammenfassung: string[];
}
