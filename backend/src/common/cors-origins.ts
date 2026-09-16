/**
 * Erlaubte CORS-Origins. Kommen aus der Umgebung (CORS_ORIGINS, kommagetrennt)
 * statt wie vorher hartkodiert aus der main.ts (siehe Issue #8) – jede Stage
 * hat andere Frontend-Domains.
 */
export const STANDARD_CORS_ORIGINS = ["http://localhost:4200"];

export function parseCorsOrigins(wert?: string): string[] {
  const origins = (wert ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter((origin) => origin.length > 0);

  // Ohne gesetzte Variable bleibt die lokale Entwicklung lauffähig.
  return origins.length > 0 ? origins : STANDARD_CORS_ORIGINS;
}
