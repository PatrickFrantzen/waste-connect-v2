import { Injectable } from "@nestjs/common";
import { CreateLogistikerDto } from "./dto/create-logistiker.dto";
import { UpdateLogistikerDto } from "./dto/update-logistiker.dto";
import { InjectModel } from "@nestjs/mongoose";
import { LogistikerNEST } from "src/schemas/logistiker.schema";
import { Model, ObjectId, Types } from "mongoose";
import { Benutzer } from "src/schemas/user.schema";
import { AvvEntry } from "src/schemas/avvEntries.schema";
import * as fs from "node:fs/promises";
import * as path from 'path';

@Injectable()
export class LogistikerService {
  constructor(
    @InjectModel(LogistikerNEST.name)
    private logistikerModel: Model<LogistikerNEST>
  ) {}

  //Wenn ein User sich einen Account erstellt, wird automatisch ein Logistikerprofil erstellt, welches allerdings noch nicht aktiviert ist
  async create(benutzerID: Types.ObjectId): Promise<void> {
    const newLogistiker = new this.logistikerModel({
      userid: benutzerID,
      firmendaten: {
        firmenname: "",
        firmenadresse: "",
        firmenwebseite: "",
        stadt: "",
        postleitzahl: "",
        bundesland: "",
      },
      logistikerdaten: {
        ansprechpartner: "",
        email: "",
        telefonnummer: "",
      },
      logistikerFilepath: {
        logoPath: [],
        zertifikatePath: [],
        genehmigungenPath: [],
      },
      logistikerBeschreibung: {
        befoerderernummer: [],
        dienstleistungen: [],
        fuhrpark: [],
        besonderheiten: "",
        logistik: [],
        logistikdienstleistungen: [],
      },
      avv: new Map<string, AvvEntry>(),
      createdAt: new Date(),
      isActivated: false,
      private: false,
    });
    await newLogistiker.save();
  }

  async findAll() {
    const logistiker = await this.logistikerModel
      .find({ isActivated: true })
      .select(["-userid", "-createdAt", "-isActivated", "-__v"])
      .exec();
    return this.modifyPrivateLogistiker(logistiker);
  }

  async findOneProtected(userid: Types.ObjectId) {
    const logistiker = await this.logistikerModel
      .findOne({ userid: userid })
      .select(["-userid", "-createdAt", "-isActivated", "-__v"]);
      return this.modifyPrivateLogistiker([logistiker])[0];
  }

  async findOneUnprotected(id: string) {
    const logistiker = await this.logistikerModel
      .findOne({ userid: id })
      .select(["-userid", "-createdAt", "-isActivated", "-__v"]);
      return this.modifyPrivateLogistiker([logistiker])[0];
  }

  async update(user: Benutzer, updateLogistikerDto: UpdateLogistikerDto) {
    await this.logistikerModel.updateOne(
      { userid: user._id },
      updateLogistikerDto
    );
    return `Du hast erfolgreich dein Profil aktualisiert.`;
  }

  remove(id: string) {
    return `This action removes a #${id} logistiker`;
  }

  //Speichert die hochgeladenen Dateien am Logistikerprofil des angemeldeten
  //Benutzers. Analog zu EntsorgerService.createUpload: das Profil wird über die
  //userid aufgelöst, damit ein Benutzer nicht in ein fremdes Profil hochladen kann.
  async createUpload(
    user: Benutzer,
    //URL aus dem Controller mitgeben, siehe Inserat
    url: string,
    acceptedFiles: Express.Multer.File[],
    failedFiles: string[],
    path: "logoPath" | "zertifikatePath" | "genehmigungenPath"
  ): Promise<{ message: string; paths?: string[] }> {
    if (!url.includes("/uploads")) {
      url = url + "/uploads";
    }
    const newPaths = acceptedFiles.map((file) => url + "/" + file.filename);

    return this.logistikerModel
      .findOneAndUpdate(
        { userid: user._id },
        {
          $push: {
            [`logistikerFilepath.${path}`]: {
              $each: newPaths,
              $slice: -5,
            },
          },
        },
        { new: true, useFindAndModify: false }
      )
      .exec()
      .then((logistiker) => {
        if (!logistiker) {
          return { message: "Logistiker nicht gefunden" };
        }

        if (failedFiles.length > 0) {
          return {
            message: `Die folgenden Dateien konnten aufgrund ihres Dateiformates nicht hochgeladen werden: ${failedFiles.join(", ")}`,
          };
        }

        return {
          message: "Die Dateien wurden erfolgreich hochgeladen",
          paths: newPaths,
        };
      });
  }

async deleteFileFromLogistiker(
  inseratID: string,
  filename: string,
  filepath:
    | "bildpath"
    | "analysepath"
    | "logopath"
    | "zertifikatepath"
    | "genehmigungenpath"
): Promise<string | void> {
  const doc = await this.logistikerModel.findById(inseratID);
  const pathArray = doc.logistikerFilepath[filepath];
  if (!pathArray) {
    return "Ungültiger Dateipfad";
  }
  const index = pathArray.indexOf(filename);
  if (index > -1) {
    pathArray.splice(index, 1);
  } else {
    return "Datei nicht gefunden";
  }
}

async changeIsActivatedStatusOfLogistiker(user: Benutzer, status: boolean) {
  return await this.logistikerModel.updateOne(
    { userid: user._id },
    { isActivated: status }
  );
}

async changePrivateStatusOfLogistiker(user: Benutzer, status: boolean) {
  return await this.logistikerModel.updateOne(
    { userid: user._id },
    { private: status }
  );
}

  private modifyPrivateLogistiker(logistiker: LogistikerNEST[]) {
    return logistiker.map((logistiker) => {
      if (logistiker.private) {
        return {
          ...logistiker,
          firmendaten: {
            ...logistiker.firmendaten,
            firmenadresse: "keine Angabe",
            telefonnummer: "keine Angabe",
            ansprechpartner: "keine Angabe",
            email: "keine Angabe",
          },
          logistikerdaten: {
            ...logistiker.logistikerdaten,
            ansprechpartner: "keine Angabe",
            email: "keine Angabe",
            telefonnummer: "keine Angabe",
          },
        };
      } else {
        return logistiker;
      }
    });
  }

  async getZertifikat(id: string, zertifikat: string) {
    return await this.getFile(id, zertifikat, "zertifikatePath");
  }

  async getGenehmigung(id: string, genehmigung: string) {
    return await this.getFile(id, genehmigung, "genehmigungenPath");
  }

  async getFile(
    //Den REsponse aus dem Controller mitgeben, siehe Inserat oder Entsorger
    id: string,
    fileName: string,
    fileType: "zertifikatePath" | "genehmigungenPath"
  ) {
    let blob: Buffer;
    const logistiker = await this.logistikerModel.findById(id);
    if (!logistiker) {
      return "Entsorger nicht gefunden";
    }

    const indexOfFile = logistiker.logistikerFilepath[fileType].findIndex(
      (path) => path === fileName
    );

    if (indexOfFile === -1) {
      return `${fileName} nicht gefunden`;
    }

    const filepath = logistiker.logistikerFilepath[fileType][indexOfFile];

    const file = path.join(__dirname, "..", "/uploads/", filepath);

    await fs
      .access(file, fs.constants.F_OK)
      .then(async () => {
        blob = await fs.readFile(file);
      })
      .catch(() => {
        return "Datei nicht gefunden";
      });

    return blob;
  }
}
