import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as fs from "node:fs/promises";
import * as path from "path";
import { Response } from "express";
import { InseratNEST } from "src/schemas/inserat.schema";
import { CreateUploadDto } from "src/protected/uploads/dto/create-upload.dto";

/**
 * Datei-Handling der Inserate: Upload-Pfade in der Datenbank pflegen,
 * Dateien vom Dateisystem entfernen und Analysen ausliefern.
 * Aus dem InseratService herausgelöst (Ticket #6).
 */
@Injectable()
export class InseratDateienService {
  private readonly logger = new Logger(InseratDateienService.name);

  constructor(
    @InjectModel(InseratNEST.name) private inseratModel: Model<InseratNEST>
  ) {}

  async createUpload(
    url: string,
    createUploadDto: CreateUploadDto,
    acceptedFiles: Array<Express.Multer.File>,
    failedFiles: string[],
    path: "bildpath" | "analysepath"
  ) {
    if (!url.includes("/uploads")) {
      url = url + "/uploads";
    }
    const { documentID } = createUploadDto;
    const newPaths = acceptedFiles.map((file) => url + "/" + file.filename);

    return this.inseratModel
      .findByIdAndUpdate(
        documentID,
        {
          $push: {
            [`inseratFilepath.${path}`]: { $each: newPaths, $slice: -5 },
          },
        },
        { new: true, useFindAndModify: false }
      )
      .exec()
      .then(async (inserat) => {
        if (!inserat) {
          return { message: "Inserat nicht gefunden" };
        }

        if (failedFiles.length > 0) {
          return {
            message: `Die folgenden Dateien konnten aufgrund ihres Dateiformates nicht hochgeladen werden: ${failedFiles.join(
              ", "
            )}`,
          };
        } else {
          return { message: "Dateien erfolgreich hochgeladen" };
        }
      });
  }

  async deleteFile(
    inseratID: string,
    filename: string,
    // Feldnamen exakt wie in InseratFilepath
    filepath: "bildpath" | "analysepath"
  ): Promise<string | void> {
    const updateResult = await this.inseratModel.updateOne(
      { _id: inseratID },
      { $pull: { [`inseratFilepath.${filepath}`]: filename } }
    );

    if (updateResult.modifiedCount === 0) {
      return "Datei nicht gefunden oder Pfad ungültig";
    }
  }

  async deleteFilesFromInseratPath(path: string[]) {
    if (path.length > 0) {
      for (let i = 0; i < path.length; i++) {
        const extractedFilename = path[i].split("uploads/")[1];
        const filePath = `./uploads/${extractedFilename}`;
        try {
          await fs.unlink(filePath);
        } catch (error) {
          // Best effort: eine bereits entfernte Datei darf das Löschen der
          // übrigen Pfade nicht abbrechen.
          this.logger.warn(
            `Datei konnte nicht gelöscht werden (${filePath}): ${
              error instanceof Error ? error.message : String(error)
            }`
          );
        }
      }
    }
  }

  async getAnalyse(id: string, analyse: string, res: Response) {
    let blob: Buffer;
    const document = await this.inseratModel.findById(id).exec();
    if (!document) {
      return { message: "Dokument nicht gefunden" };
    }

    const analyseFile = analyse.split("uploads\\")[1];

    const indexOfAnalyse = document.inseratFilepath.analysepath.findIndex(
      (path: string) => path.includes(analyseFile)
    );
    if (indexOfAnalyse === -1) {
      return { message: "Analyse nicht gefunden" };
    }

    const file = path.join(__dirname, "..", "..", "..", "uploads", analyseFile);

    await fs
      .access(file, fs.constants.F_OK)
      .then(async () => {
        blob = await fs.readFile(file);
        res.setHeader("Content-Type", "application/pdf");
        res.send(blob);
      })
      .catch((e) => {
        // Bisher wurde hier nur geloggt und ein Objekt zurückgegeben, das
        // niemand ausliefert - der Client wartete bis zum Timeout.
        this.logger.warn(
          `Analysedatei nicht lesbar (${file}): ${
            e instanceof Error ? e.message : String(e)
          }`
        );
        throw new NotFoundException("Datei nicht gefunden");
      });
  }
}
