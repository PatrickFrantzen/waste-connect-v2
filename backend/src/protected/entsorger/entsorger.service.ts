import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { UpdateEntsorgerDto } from "./dto/update-entsorger.dto";
import { Model, Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { EntsorgerNEST } from "src/schemas/entsorger.schema";
import { Benutzer } from "src/schemas/user.schema";
import { EntsorgerFilterDto } from "./dto/filter-entsorger.dto";
import { PaginatorDto } from "../inserat/dto/paginator-inserat.dto";
import { zaehleNachBundesland } from "src/utils/statistik/bundeslaender";

/**
 * Verwaltet die Entsorgerprofile selbst: anlegen, lesen, filtern,
 * aktualisieren und den Aktivierungs-/Privat-Status pflegen. Datei-Handling
 * (EntsorgerDateienService) und geografische Auswertung
 * (EntsorgerStatistikService) liegen in eigenen Services.
 */
@Injectable()
export class EntsorgerService {
  private readonly logger = new Logger(EntsorgerService.name);

  constructor(
    @InjectModel(EntsorgerNEST.name)
    private entsorgerModel: Model<EntsorgerNEST>
  ) {}

  // Wenn ein User sich einen Account erstellt, wird automatisch ein Entsorgerprofil erstellt, welches allerdings noch nicht aktiviert ist
  async create(benutzerID: Types.ObjectId): Promise<void> {
    const newEntsorger = new this.entsorgerModel({
      userid: benutzerID,
      firmendaten: {
        firmenname: "",
        firmenadresse: "",
        firmenwebseite: "",
        stadt: "",
        postleitzahl: "",
        bundesland: "",
      },
      entsorgerdaten: {
        ansprechpartner: "",
        email: "",
        telefonnummer: "",
      },
      entsorgerFilepath: {
        logoPath: [],
        zertifikatePath: [],
        genehmigungenPath: [],
      },
      entsorgerBeschreibung: {
        taetigkeitsbereich: [],
        dienstleistungen: [],
        besonderheiten: "",
        logistik: [],
        zertifikatsbestaetigungen: [],
      },
      avv: [],
      avvZusammenfassung: [],
      createdAt: new Date(),
      isActivated: false,
      private: false,
    });
    await newEntsorger.save();
  }

  async findAll() {
    const entsorger = await this.entsorgerModel
      .find({ isActivated: true })
      .select(["-userid", "-createdAt", "-isActivated", "-__v"])
      .exec();

    return this.modifyPrivateEntsorger(entsorger);
  }

  async paginator(paginatorDto: PaginatorDto) {
    const { pageSize, currentPage } = paginatorDto;
    const totalEntsorger = await this.entsorgerModel.countDocuments().exec();
    const entsorger = await this.entsorgerModel
      .find({ isActivated: true })
      .select(["-userid", "-createdAt", "-isActivated", "-__v"])
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize)
      .exec();
    return {
      entsorger: this.modifyPrivateEntsorger(entsorger),
      totalEntsorger,
    };
  }

  async filterAndPaginate(
    filterEntsorgerDto: EntsorgerFilterDto,
    paginatorDto: PaginatorDto
  ) {
    const { pageSize, currentPage } = paginatorDto;
    let query = this.buildQuery(filterEntsorgerDto);
    const totalEntsorger = await this.entsorgerModel
      .countDocuments(query)
      .exec();
    const entsorger = await this.entsorgerModel
      .find(query)
      .select(["-userid", "-createdAt", "-isActivated", "-__v"])
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize)
      .exec();

    if (!entsorger || entsorger.length === 0) {
      return {
        entsorger: [],
        totalEntsorger: 0,
        numberOfEntsorger: 0,
        numberOfEntsorgerByBundesland:
          await this.getBundeslaenderAnzahl(entsorger),
      };
    }

    return {
      entsorger: this.modifyPrivateEntsorger(entsorger),
      totalEntsorger,
      numberOfEntsorger: entsorger.length,
      numberOfEntsorgerByBundesland:
        await this.getBundeslaenderAnzahl(entsorger),
    };
  }

  //Um innerhalb des Systems einen Entsorger zu finden.
  //Wird nicht an das Frontend gegeben
  async findOneForDelete(id: string) {
    const entsorger = await this.entsorgerModel.findOne({ _id: id });
    return entsorger;
  }

  //id ist hier die userID des Benutzers. Wenn darüber der Entsorger nicht gefunden wird, weil die EntsorgerID direkt übermittelt wird, dann soll über die _id gesucht werden
  async findOneUnprotected(id: string) {
    let entsorger = await this.entsorgerModel
      .findOne({ userid: id })
      .select(["-userid", "-createdAt", "-isActivated", "-__v"]);
    if (entsorger === null) {
      entsorger = await this.entsorgerModel
      .findOne({ _id: id })
      .select(["-userid", "-createdAt", "-isActivated", "-__v"]);
    }
    return this.modifyPrivateEntsorger([entsorger])[0];
  }

  async findOneProtected(id: Types.ObjectId) {
    const entsorger = await this.entsorgerModel
      .findOne({ userid: id })
      .select(["-userid", "-createdAt", "-isActivated", "-__v"]);
    return this.modifyPrivateEntsorger([entsorger])[0];
  }

  async findOneWithUser(id: string) {
    const entsorger = await this.entsorgerModel.findOne({ _id: id });
    return entsorger;
  }

  async update(
    user: Benutzer,
    updateEntsorgerDto: UpdateEntsorgerDto
  ): Promise<{ message: string }> {
    await this.entsorgerModel.updateOne(
      { userid: user._id },
      {
        $set: {
          firmendaten: updateEntsorgerDto.firmendaten,
          entsorgerdaten: updateEntsorgerDto.entsorgerdaten,
          entsorgerBeschreibung: updateEntsorgerDto.entsorgerBeschreibung,
          avv: updateEntsorgerDto.avv,
          avvZusammenfassung: updateEntsorgerDto.avvZusammenfassung,
        },
      }
    );

    return { message: "Profil erfolgreich aktualisiert" };
  }

  async filter(filterEntsorgerDto: EntsorgerFilterDto) {
    let query = this.buildQuery(filterEntsorgerDto);
    const entsorger = await this.entsorgerModel
      .find(query)
      .select(["-userid", "-createdAt", "-isActivated", "-__v"])
      .exec();

    return {
      entsorger: this.modifyPrivateEntsorger(entsorger),
      numberOfEntsorger: entsorger.length,
    };
  }

  async getNumberOfFilterEntsorger(filterEntsorgerDto: EntsorgerFilterDto) {
    let query = this.buildQuery(filterEntsorgerDto);
    const entsorger = await this.entsorgerModel.find(query).exec();
    return entsorger.length;
  }
  private buildQuery(filterEntsorgerDto: EntsorgerFilterDto) {
    let query = {};
    if (filterEntsorgerDto.entsorgerBeschreibung) {
      for (const key in filterEntsorgerDto.entsorgerBeschreibung) {
        if (
          filterEntsorgerDto.entsorgerBeschreibung[key] !== undefined &&
          filterEntsorgerDto.entsorgerBeschreibung[key] !== "" &&
          filterEntsorgerDto.entsorgerBeschreibung[key] !== null
        ) {
          let prefix = "entsorgerBeschreibung";
          if (["stadt", "bundesland", "postleitzahl"].includes(key)) {
            prefix = "firmendaten";
          } else if (key === "avv") {
            prefix = "avvZusammenfassung";
          }
          if (key === "avv") {
            if (filterEntsorgerDto.entsorgerBeschreibung[key].length > 0) {
              let avvValue = filterEntsorgerDto.entsorgerBeschreibung[
                key
              ].filter((item) => item);
              if (avvValue.length > 0) {
                if (avvValue.length === 2) {
                  avvValue = [avvValue[1]];
                } else {
                  avvValue = [avvValue[0]];
                }
                const regexPattern = avvValue.map(
                  (entry) => new RegExp(`^${entry}`, "i")
                );
                query[prefix] = { $in: regexPattern };
              }
            }
          } else if (key === "zertifikatsbestaetigungen") {
            const regexPattern = filterEntsorgerDto.entsorgerBeschreibung[
              key
            ].map((entry) => new RegExp(entry, "i"));
            query[`${prefix}.${key}`] = { $in: regexPattern };
          } else {
            query[`${prefix}.${key}`] =
              filterEntsorgerDto.entsorgerBeschreibung[key];
          }
        }
      }
    }
    return query;
  }

  remove(id: string) {
    return `This action removes a #${id} entsorger`;
  }

  async changeIsActivatedStatusOfEntsorger(user: Benutzer, status: boolean) {
    return await this.entsorgerModel.updateOne(
      { userid: user._id },
      {
        isActivated: status,
        "firmendaten.firmenname": user.firmendaten.firmenname,
        "firmendaten.firmenadresse": user.firmendaten.firmenadresse,
        "firmendaten.firmenwebseite": user.firmendaten.firmenwebseite,
      }
    );
  }

  async changePrivateStatusOfEntsorger(user: Benutzer, status: boolean) {
    return await this.entsorgerModel.updateOne(
      { userid: user._id },
      { private: status }
    );
  }


  private modifyPrivateEntsorger(entsorger: EntsorgerNEST[]) {
    return entsorger.map((entsorger) => {
      if (entsorger.private) {
        entsorger.firmendaten.firmenadresse = "keine Angabe";
        entsorger.firmendaten.telefonnummer = "keine Angabe";
        entsorger.firmendaten.ansprechpartner = "keine Angabe";
        entsorger.entsorgerdaten.ansprechpartner = "keine Angabe";
        entsorger.entsorgerdaten.email = "keine Angabe";
        entsorger.entsorgerdaten.telefonnummer = "keine Angabe";
      }
      return entsorger;
    });
  }

  private async getBundeslaenderAnzahl(matchingEntsorger: EntsorgerNEST[]) {
    try {
      return zaehleNachBundesland(
        matchingEntsorger,
        (entsorger) => entsorger.firmendaten.bundesland
      );
    } catch (error) {
      this.logger.error(
        "Bundesländeranzahl konnte nicht ermittelt werden",
        error instanceof Error ? error.stack : String(error)
      );
      throw new InternalServerErrorException(
        "Fehler beim Ermitteln der Bundesländeranzahl"
      );
    }
  }
}
