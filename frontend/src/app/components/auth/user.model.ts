import { AvvEntriesInterface } from "src/app/shared/dialogs/avv-dialog/avv-dialog.service";
import { Inserat, InseratNEST } from "../angebot/angebot.model";
import { Inseratfilter } from "../landingpage/landingpage-finden/inseratfilter.model";
import { Entsorgerfilter } from "../landingpage/landingpage-entsorger-finden/entsorgerfilter.model";

export interface User {
    email: string,
    nachname?: string, //Nur noch Ansprechpartner verwenden
    vorname?: string, //Nur noch Ansprechpartner verwenden
    ansprechpartner?: string,
    userId?: string,
    admin: boolean,
    inserateIds: string[],
    abfallschluesselnummer: string[],
    firmenname?: string,
    firmenadresse?: string,
    firmenwebseite?: string,
    postleitzahl?: string,
    stadt?: string,
    telefonnummer?: string,
    firstLogin: boolean,
    letzteSuche: Inseratfilter[],
    merkzettel: Inserat[],
    private: boolean,
    messages: {
        empfangeneNachrichten: Message[],
        numberOfEmpfangeneNachrichten: number,
        gesendeteNachrichten: Message[],
        numberOfGesendeteNachrichten: number,
    },    
    entsorger: boolean,
    produzent: boolean,
    logistik: boolean,
}

export interface FirmenProfil {
    // vorname: string,
    // nachname: string,
    ansprechpartner: string,
    firmenname: string,
    firmenadresse: string,
    firmenwebseite: string,
    postleitzahl: string,
    stadt: string,
    bundesland: string,
    telefonnummer: string,
    private: boolean,
    entsorger: boolean,
    produzent: boolean,
    logistik: boolean
}

export interface FirmenProfilResponse {
    firmenProfil: FirmenProfil,
}

export interface EntsorgerProfil {
    _id: string,
    firmenname: string,
    ansprechpartner: string,
    email: string,
    webseite: string,
    telefonnummer: string,
    logo: File[],
    logoPath?: string[]
    taetigkeitsbereich: string[],
    dienstleistungen: string[],
    besonderheiten: string,
    logistik: string[],
    avv: AvvEntriesInterface[],
    avvZusammenfassung: string[]
    zertifikate: File[],
    zertifikatePath?: string[],
    genehmigungen: File[],
    genehmigungenPath?: string[],
    zertifikatsbestaetigungen: string[],
    createdAt?: Date,
    private: boolean,
    standort: string,
    bundesland: string,
    postleitzahl: string,
}

export interface EntsorgerProfilResponse {
    entsorgerProfil: EntsorgerProfil,
}

export interface LogistikProfil {
    _id: string,
    ansprechpartner: string,
    firmenname: string,
    email: string,
    webseite: string,
    telefonnummer: string,
    logo: File[],
    logoPath?: string[],
    befoerderernummer: string,
    fuhrpark: string[],
    dienstleistungen: string[],
    besonderheiten: string,
    logistik: string[],
    logistikdienstleistungen: string[],
    avv: AvvEntriesInterface[],
    avvZusammenfassung: string[],
    zertifikate: File[],
    zertifikatePath?: string[],
    genehmigungen: File[],
    genehmigungenPath?: string[],
    zertifikatsbestaetigungen: string[],
    createdAt?: Date,
    private: boolean,
    standort: string,
    postleitzahl: string,
    bundesland: string,
}

export interface LogistikProfilResponse {
    logistikProfil: LogistikProfil,
}

export interface Message {
    subject: string,
    message: string,
    emailadresseOfEmpfaenger?: string,
    emailadresseOfSender?: string,
    status: string,
    date: string
}

export interface EntsorgerNEST {
    _id: string,
    firmendaten: Firmendaten,
    entsorgerdaten: Entsorgerdaten,
    entsorgerFilepath: EntsorgerFilepath,
    entsorgerBeschreibung: EntsorgerBeschreibung,
    avv: AvvEntriesInterface[],
    avvZusammenfassung: string[],
    private: boolean,
}

export interface Firmendaten {
    firmenname: string,
    firmenadresse: string,
    firmenwebseite: string,
    telefonnummer: string,
    ansprechpartner: string,
    stadt: string,
    postleitzahl: string,
    bundesland: string,
    standortFavoriten: standortFavorit[];
}

export interface Entsorgerdaten {
    ansprechpartner: string,
    email: string,
    telefonnummer: string,
}

export interface EntsorgerFilepath {
    [key: string]: any,
    logoPath: string[],
    zertifikatePath: string[],
    genehmigungenPath: string[],
}

export interface EntsorgerBeschreibung {
    taetigkeitsbereich: string[],
    dienstleistungen: string[],
    logistik: string[],
    zertifikatsbestaetigungen: string[],
    besonderheiten: string,
}

export interface UpdateBenutzerDto {
    firmendaten?: Firmendaten,
    privateModus?: boolean,
    benutzerinteraktionen?: {
        letzteSuche?: Inseratfilter;
        letzteSucheEntsorger?: Entsorgerfilter; // Updated type
        merkzettel?: InseratNEST[]; 
    },
    profile?: {
        produzent: boolean;
        entsorger: boolean;
        logistik: boolean;
    },
    messages?: {
        gesendeteNachrichten?: Message[];
        empfangeneNachrichten?: Message[];
        numberOfGesendeteNachrichten?: number;
        numberOfEmpfangeneNachrichten?: number;
    },
    benutzerdaten?: {
        firstLogin: boolean;
    }
}

export interface standortFavorit {
    bundesland: string
    stadt: string;
    postleitzahl: string;
}