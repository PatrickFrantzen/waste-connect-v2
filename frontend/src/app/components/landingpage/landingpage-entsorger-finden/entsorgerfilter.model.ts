export interface Entsorgerfilter {
    taetigkeitsbereiche?: string | null,
    dienstleistungen?: string | null,
    logistik?: string | null,
    abfallursprung?: string | null,
    abfallschluesselnummer?: string | null,
    zertifikate?: string | null,
}

export interface EntsorgerfilterDto {
    stadt?: string | null;
    bundesland?: string | null;
    postleitzahl?: string | null;
    taetigkeitsbereich?: string | null;
    dienstleistungen?: string | null;
    logistik?: string[] | null;
    zertifikatsbestaetigungen?: string | null;
    avv?: string[] | null; 
}