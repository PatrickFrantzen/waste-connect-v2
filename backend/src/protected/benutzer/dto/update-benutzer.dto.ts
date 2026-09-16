import { IsBoolean, IsObject } from 'class-validator';
import { Benutzerdaten } from 'src/models/benutzer/benutzderdaten.model';
import { Message } from 'src/models/benutzer/message.model';
import { Entsorgerfilter, Inseratfilter } from 'src/models/benutzer/profilfilter.model';
import { InseratNEST } from 'src/schemas/inserat.schema';

/**
 * Body von `PATCH /benutzer/updateUser`.
 *
 * Bewusst *kein* `PartialType(Benutzer)`: das Persistenz-Schema würde
 * `email`, `password` und `isAdmin` in den Request-Body erben, obwohl der
 * Service sie nie übernimmt (siehe Ticket #7). Alle Felder, die der Service
 * schreibt, stehen hier explizit.
 */
export class UpdateBenutzerDto {

    @IsObject()
    firmendaten: {
        firmenname: string;
        firmenadresse: string;
        firmenwebseite: string;
        telefonnummer: string;
        ansprechpartner: string;
        stadt: string;
        postleitzahl: string;
        bundesland: string;
        standortFavoriten: {
            bundesland: string;
            stadt: string;
            postleitzahl: string;
        }[];
    };

    @IsBoolean()
    privateModus: boolean;

    // Der Service liest `benutzerdaten.firstLogin` direkt; fehlt das Objekt,
    // gab es bisher eine 500 statt einer verständlichen 400.
    @IsObject()
    benutzerdaten: Benutzerdaten;

    @IsObject()
    benutzerinteraktionen: {
        letzteSuche: Inseratfilter[];
        letzteSucheEntsorger: Entsorgerfilter[];
        merkzettel: InseratNEST[];
    };

    @IsObject()
    profile: {
        produzent: boolean;
        entsorger: boolean;
        logistik: boolean;
    };

    @IsObject()
    messages: {
        gesendeteNachrichten: Message[];
        empfangeneNachrichten: Message[];
        numberOfGesendeteNachrichten: number;
        numberOfEmpfangeneNachrichten: number;
    };
}
