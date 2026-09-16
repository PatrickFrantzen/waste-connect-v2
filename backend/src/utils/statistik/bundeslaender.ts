export const BUNDESLAENDER = [
  "Baden-Württemberg",
  "Bayern",
  "Berlin",
  "Brandenburg",
  "Bremen",
  "Hamburg",
  "Hessen",
  "Mecklenburg-Vorpommern",
  "Niedersachsen",
  "Nordrhein-Westfalen",
  "Rheinland-Pfalz",
  "Saarland",
  "Sachsen",
  "Sachsen-Anhalt",
  "Schleswig-Holstein",
  "Thüringen",
];

/**
 * Zählt Einträge je Bundesland. Liefert immer alle 16 Bundesländer in fester
 * Reihenfolge, damit das Frontend eine vollständige Verteilung bekommt.
 */
export function zaehleNachBundesland<T>(
  eintraege: T[],
  bundeslandVon: (eintrag: T) => string
): { name: string; value: number }[] {
  const verteilung = BUNDESLAENDER.map((name) => ({ name, value: 0 }));

  eintraege.forEach((eintrag) => {
    verteilung.forEach((bundesland) => {
      if (bundeslandVon(eintrag) === bundesland.name) {
        bundesland.value++;
      }
    });
  });

  return verteilung;
}
