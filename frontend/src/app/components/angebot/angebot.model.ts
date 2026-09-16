export interface angebot {
    titel: string,
    subtitel: string,
    foto: string,
    informationen: string,
    preis: number,
    wertstoff?: string,

    // avv: number,
    // gefahrstoff: boolean,
    // logistik: boolean
}

export interface Inserat {
    _id?: string;
    id?: string;
    abfallbezeichnung: string,
    abfallursprung: string,
    abfallschluesselnummer: string,
    abfallmenge: string,
    einheit: string,
    // intervall: string,
    intervall: {
        intervallOption: string,
        dateStart: Date,
        dateEnd: Date,
      },
    standort_Bundesland: string,
    standort_Gemeinde?: string,
    standort_Postleitzahl?: string,
    beschreibung: string,
    logistik: string,
    verladung: string,
    verpackung: string,
    gewicht: string,
    // preisvorstellung: string,
    bild: File[],
    analyse: File[],
    bildPath?: string[],
    analysePath?: string[],
    userId: string,
    createdAt?: Date,
    erstelltVonFirma?: string,
    erstelltVonAdresse?: string,
    erstelltVonEmail?: string,
    erstelltVonTelefonnummer?: string,
    erstelltVonWebseite?: string,
    private?: boolean,
}

export interface InseratNEST {
    _id?: string;
    inseratBeschreibung: InseratBeschreibung;
    inseratStandort: InseratStandort;
    inseratLogistik: InseratLogistik;
    inseratFilepath: InseratFilepath;
    createdAt?: Date;
    inseratErsteller?: InseratErsteller;
}

interface InseratBeschreibung {
    abfallbezeichnung: string;
    abfallursprung: string;
    abfallschluesselnummer: string;
    abfallmenge: string;
    einheit: string;
    intervall: Intervall;
    beschreibung: string;
}

interface Intervall {
    intervallOption: string;
    dateStart: Date;
    dateEnd: Date;
}

interface InseratStandort {
    standort_Bundesland: string;
    standort_Gemeinde: string;
    standort_Postleitzahl: string;
}
interface InseratLogistik {
    logistik: string;
    verladung: string;
    verpackung: string;
    gewicht: string;
}

interface InseratFilepath {
    bildpath: string[];
    analysepath: string[];
}

interface InseratErsteller {
    firma: string;
    adresse: string;
    webseite: string;
    telefonnummer: string;
    email: string;
    ansprechpartner: string;
    privateModus: boolean;
}

