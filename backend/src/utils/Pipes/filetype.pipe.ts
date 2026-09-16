import { Injectable, PipeTransform } from "@nestjs/common";
import { fromFile } from "file-type";
import { promises as fs } from "fs";

export interface GepruefteDateien {
  acceptedFiles: Array<Express.Multer.File>;
  failedFiles: string[];
}

/**
 * Prueft hochgeladene Dateien anhand ihres tatsaechlichen Inhalts (Magic Bytes)
 * gegen eine Liste erlaubter MIME-Typen. Abgelehnte Dateien werden sofort von
 * der Platte geloescht, damit Multer sie nicht liegen laesst.
 *
 * Die Erkennung uebernimmt die `file-type`-Bibliothek; vorher wurde pro Pipe
 * eine eigene, unvollstaendige Magic-Number-Liste gepflegt (siehe Issue #8).
 */
async function pruefe(
  files: Array<Express.Multer.File>,
  erlaubteTypen: string[]
): Promise<GepruefteDateien> {
  const acceptedFiles: Array<Express.Multer.File> = [];
  const failedFiles: string[] = [];

  for (const file of files) {
    const erkannt = await fromFile(file.path);

    if (erkannt && erlaubteTypen.includes(erkannt.mime)) {
      acceptedFiles.push(file);
    } else {
      await fs.unlink(file.path);
      failedFiles.push(file.originalname);
    }
  }

  return { acceptedFiles, failedFiles };
}

@Injectable()
export class BildFileTypeValidationPipe implements PipeTransform {
  async transform(files: Array<Express.Multer.File>): Promise<GepruefteDateien> {
    return pruefe(files, ["image/jpeg", "image/png"]);
  }
}

@Injectable()
export class PdfFileTypeValidationPipe implements PipeTransform {
  async transform(files: Array<Express.Multer.File>): Promise<GepruefteDateien> {
    return pruefe(files, ["application/pdf"]);
  }
}
