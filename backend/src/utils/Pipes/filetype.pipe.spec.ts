import { promises as fs } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import {
  BildFileTypeValidationPipe,
  PdfFileTypeValidationPipe,
} from "./filetype.pipe";

/**
 * Charakterisierung der Datei-Upload-Validierung: akzeptiert wird ausschliesslich
 * anhand des tatsaechlichen Dateiinhalts (Magic Bytes), nicht anhand der Endung.
 * Abgelehnte Dateien muessen von der Platte verschwinden.
 */

// Minimal gueltige Dateien, die die jeweilige Signatur wirklich tragen.
const PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64"
);
const JPEG = Buffer.from(
  "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAABAAEBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAD8AKp//2Q==",
  "base64"
);
const PDF = Buffer.from(
  "%PDF-1.4\n1 0 obj\n<< /Type /Catalog >>\nendobj\ntrailer\n<< /Root 1 0 R >>\n%%EOF\n",
  "latin1"
);
const TEXT = Buffer.from("das ist nur Text und keine Bilddatei\n", "utf8");

let verzeichnis: string;
let zaehler = 0;

const datei = async (
  inhalt: Buffer,
  originalname: string
): Promise<Express.Multer.File> => {
  const path = join(verzeichnis, `${zaehler++}-${originalname}`);
  await fs.writeFile(path, inhalt);
  return { path, originalname } as Express.Multer.File;
};

const existiert = async (path: string) =>
  fs
    .access(path)
    .then(() => true)
    .catch(() => false);

beforeAll(async () => {
  verzeichnis = await fs.mkdtemp(join(tmpdir(), "filetype-pipe-"));
});

afterAll(async () => {
  await fs.rm(verzeichnis, { recursive: true, force: true });
});

describe("BildFileTypeValidationPipe", () => {
  const pipe = new BildFileTypeValidationPipe();

  it("akzeptiert PNG und JPEG", async () => {
    const dateien = [
      await datei(PNG, "bild.png"),
      await datei(JPEG, "bild.jpg"),
    ];

    const { acceptedFiles, failedFiles } = await pipe.transform(dateien);

    expect(failedFiles).toEqual([]);
    expect(acceptedFiles).toEqual(dateien);
  });

  it("lehnt Dateien ab, deren Inhalt kein Bild ist, und loescht sie", async () => {
    const fake = await datei(TEXT, "bild.png");
    const pdfMitBildendung = await datei(PDF, "urkunde.png");

    const { acceptedFiles, failedFiles } = await pipe.transform([
      fake,
      pdfMitBildendung,
    ]);

    expect(acceptedFiles).toEqual([]);
    expect(failedFiles).toEqual(["bild.png", "urkunde.png"]);
    expect(await existiert(fake.path)).toBe(false);
    expect(await existiert(pdfMitBildendung.path)).toBe(false);
  });

  it("akzeptiert JPEG-Varianten ohne JFIF-Header (SOI + DQT)", async () => {
    // Ein JPEG muss nicht mit APP0/JFIF (ffd8ffe0) beginnen; Kameras und
    // Bildbearbeitung liefern u.a. ffd8ffdb (SOI direkt gefolgt von DQT).
    const variante = Buffer.from(JPEG);
    variante[3] = 0xdb;
    const jpeg = await datei(variante, "kamera.jpg");

    const { acceptedFiles, failedFiles } = await pipe.transform([jpeg]);

    expect(failedFiles).toEqual([]);
    expect(acceptedFiles).toEqual([jpeg]);
  });

  it("trennt gueltige und ungueltige Dateien im selben Upload", async () => {
    const gut = await datei(PNG, "gut.png");
    const schlecht = await datei(TEXT, "schlecht.png");

    const { acceptedFiles, failedFiles } = await pipe.transform([
      gut,
      schlecht,
    ]);

    expect(acceptedFiles).toEqual([gut]);
    expect(failedFiles).toEqual(["schlecht.png"]);
    expect(await existiert(gut.path)).toBe(true);
  });
});

describe("PdfFileTypeValidationPipe", () => {
  const pipe = new PdfFileTypeValidationPipe();

  it("akzeptiert PDF", async () => {
    const dateien = [await datei(PDF, "urkunde.pdf")];

    const { acceptedFiles, failedFiles } = await pipe.transform(dateien);

    expect(failedFiles).toEqual([]);
    expect(acceptedFiles).toEqual(dateien);
  });

  it("lehnt Nicht-PDF ab und loescht es", async () => {
    const bild = await datei(PNG, "urkunde.pdf");

    const { acceptedFiles, failedFiles } = await pipe.transform([bild]);

    expect(acceptedFiles).toEqual([]);
    expect(failedFiles).toEqual(["urkunde.pdf"]);
    expect(await existiert(bild.path)).toBe(false);
  });
});
