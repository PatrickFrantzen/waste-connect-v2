import { BadRequestException } from "@nestjs/common";

/**
 * Einige Endpunkte übergeben komplexe Filter/Paginator-Objekte als
 * JSON-String im Query-String. Ein kaputter String ist ein Client-Fehler
 * und darf nicht als ungefangene SyntaxError (500) durchschlagen.
 */
export function parseQueryJson<T>(wert: string, parameterName: string): T {
  try {
    return JSON.parse(wert);
  } catch {
    throw new BadRequestException(
      `Der Parameter ${parameterName} ist kein gültiges JSON.`
    );
  }
}
