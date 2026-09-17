import { generateUniqueFilename } from "./generate-unique-filename";

/**
 * Diese Logik steckte identisch in InseratModule und UploadsModule (siehe
 * MulterModule.register-Aufrufe) und ist damit die einzige gemeinsame
 * Dateiname-Vergabe für Uploads im ganzen Backend.
 */
describe("generateUniqueFilename", () => {
  it("behält die Dateiendung bei", () => {
    expect(generateUniqueFilename("foto.png")).toMatch(/\.png$/);
  });

  it("erzeugt bei wiederholtem Aufruf unterschiedliche Namen für dieselbe Datei", () => {
    const erster = generateUniqueFilename("foto.png");
    const zweiter = generateUniqueFilename("foto.png");
    expect(erster).not.toBe(zweiter);
  });

  it("behält nur die letzte Endung bei Dateien mit mehreren Punkten (z.B. archiv.tar.gz)", () => {
    const ergebnis = generateUniqueFilename("archiv.tar.gz");
    expect(ergebnis).toMatch(/^archiv\.tar-\d+-\d+\.gz$/);
  });

  it("funktioniert auch ohne Dateiendung", () => {
    const ergebnis = generateUniqueFilename("readme");
    expect(ergebnis).toMatch(/^readme-\d+-\d+$/);
  });
});
