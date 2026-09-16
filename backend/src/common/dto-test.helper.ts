import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

/**
 * Prüft ein DTO so, wie es die globale ValidationPipe tut
 * (`transform: true`), und liefert die verletzten Property-Namen.
 */
export function verletzteFelder<T extends object>(
  dto: new () => T,
  eingabe: unknown
): string[] {
  // Wie die globale Pipe: `transform: true`, aber ohne implizite
  // Typumwandlung – umgewandelt wird nur, wo ein @Type steht.
  const instanz = plainToInstance(dto, eingabe);
  return validateSync(instanz as object, {
    whitelist: false,
    forbidUnknownValues: false,
  }).map((fehler) => fehler.property);
}
