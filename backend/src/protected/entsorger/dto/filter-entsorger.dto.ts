export class EntsorgerFilterDto {
    entsorgerBeschreibung: {
        stadt?: string; //ist in firmendaten.stadt
        bundesland?: string; //ist in firmendaten.bundesland
        postleitzahl?: string; //ist in firmendaten.postleitzahl
        taetigkeitsbereich?: string[]; //ist entsorgerBeschreibung.taetigkeitsbereich
        dienstleistungen?: string[]; // ist in entsorgerBeschreibung.dienstleistungen
        logistik?: string[]; //ist in entsorgerBeschreibung.logistik
        zertifikatsbestaetigungen?: string[]; //ist in entsorgerBeschreibung.zertifikatsbestaetigungen
        avv?: string[]; // ist in avvZusammenfassung
    }

}