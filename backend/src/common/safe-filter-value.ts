/**
 * Schützt Mongoose-Filter-Queries, die aus Nutzereingaben zusammengebaut
 * werden (siehe `buildQuery` in inserat.service.ts / entsorger.service.ts),
 * vor NoSQL-Operator-Injection. Diese Filter kommen teils über
 * `parseQueryJson` (rohes `JSON.parse`, umgeht die globale ValidationPipe
 * komplett) und teils über unvalidierte DTO-Felder ohne class-validator-
 * Decorator – ohne diesen Guard würde z.B. `{ "abfallursprung": { "$ne":
 * null } }` unverändert als Mongo-Query-Operator durchgereicht.
 *
 * Erlaubt sind nur Strings und Arrays aus Strings, weil das die einzigen
 * Formen sind, die die bestehenden Filter tatsächlich verwenden.
 */
export function isSafeFilterValue(value: unknown): value is string | string[] {
  if (typeof value === "string") {
    return true;
  }
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}
