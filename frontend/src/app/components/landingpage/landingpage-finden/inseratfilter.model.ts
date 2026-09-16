export interface Inseratfilter {
    abfallursprung?: string | null | undefined,
    abfallschluesselnummer?: string | null | undefined,
    abfallbezeichnung?: string | null,
    standort_Bundesland?: string | null,
    standort_Gemeinde?: string | null,
    standort_Postleitzahl?: string | null,
    userId?: string,
    inseratId?: string,
}

export interface InseratfilterDto {
    abfallursprung?: string | null ,
    abfallschluesselnummer?: string | null,
    abfallbezeichnung?: string | null,
    standort_Bundesland?: string | null,
    standort_Gemeinde?: string | null,
    standort_Postleitzahl?: string | null,
}
