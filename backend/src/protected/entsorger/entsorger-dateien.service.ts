import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as fs from "node:fs/promises";
import * as path from "path";
import { Response } from "express";
import { EntsorgerNEST } from "src/schemas/entsorger.schema";
import { Benutzer } from "src/schemas/user.schema";

/**
 * Datei-Handling der Entsorgerprofile: Upload-Pfade pflegen und hinterlegte
 * Zertifikate/Genehmigungen ausliefern.
 * Aus dem EntsorgerService herausgelöst (Ticket #6).
 */
@Injectable()
export class EntsorgerDateienService {
  constructor(
    @InjectModel(EntsorgerNEST.name)
    private entsorgerModel: Model<EntsorgerNEST>
  ) {}

  async createUpload(
    user: Benutzer,
    url: string,
    acceptedFiles: Array<Express.Multer.File>,
    failedFiles: string[],
    path: "logoPath" | "zertifikatePath" | "genehmigungenPath"
  ): Promise<{ message: string; paths?: string[] }> {
    const userId = user._id;
    if (!url.includes("/uploads")) {
      url = url + "/uploads";
    }
    const newPaths = acceptedFiles.map((file) => url + "/" + file.filename);

    return this.entsorgerModel
      .findOneAndUpdate(
        { userid: userId },
        {
          $push: {
            [`entsorgerFilepath.${path}`]: {
              $each: newPaths,
              $slice: -5,
            },
          },
        },
        { new: true, useFindAndModify: false }
      )
      .exec()
      .then(async (entsorger) => {
        if (!entsorger) {
          return { message: "Entsorger nicht gefunden" };
        }

        if (failedFiles.length > 0) {
          return {
            message: `Die folgenden Dateien konnten aufgrund ihres Dateiformates nicht hochgeladen werden: ${failedFiles.join(", ")}`,
          };
        } else {
          return {
            message: "Die Dateien wurden erfolgreich hochgeladen",
            paths: newPaths,
          };
        }
      });
  }

  async deleteFile(
    inseratID: string,
    filename: string,
    // Feldnamen exakt wie in EntsorgerFilepath
    filepath: "logoPath" | "zertifikatePath" | "genehmigungenPath"
  ): Promise<string | void> {
    const updateResult = await this.entsorgerModel.updateOne(
      { _id: inseratID },
      { $pull: { [`entsorgerFilepath.${filepath}`]: filename } }
    );

    if (updateResult.modifiedCount === 0) {
      return "Datei nicht gefunden oder Pfad ungültig";
    }
  }

  async getZertifikat(id: string, zertifikat: string, res: Response) {
    return await this.getFile(id, zertifikat, "zertifikatePath", res);
  }

  async getGenehmigung(id: string, genehmigung: string, res: Response) {
    return await this.getFile(id, genehmigung, "genehmigungenPath", res);
  }

  async getFile(
    id: string,
    fileName: string,
    fileType: "zertifikatePath" | "genehmigungenPath",
    res: Response
  ) {
    let blob: Buffer;
    const entsorger = await this.entsorgerModel.findById(id);
    if (!entsorger) {
      return "Entsorger nicht gefunden";
    }

    const fileNameSeparated = fileName.split("uploads\\")[1];

    const indexOfFile = entsorger.entsorgerFilepath[fileType].findIndex(
      (path) => path.includes(fileNameSeparated)
    );

    if (indexOfFile === -1) {
      return `${fileName} nicht gefunden`;
    }

    const file = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "uploads",
      fileNameSeparated
    );

    await fs
      .access(file, fs.constants.F_OK)
      .then(async () => {
        blob = await fs.readFile(file);
        res.setHeader("Content-Type", "application/pdf");
        res.send(blob);
      })
      .catch(() => {
        return { message: "Datei nicht gefunden" };
      });
  }
}
