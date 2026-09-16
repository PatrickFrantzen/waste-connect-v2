import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { CreateInseratDto } from "./dto/create-inserat.dto";
import { UpdateInseratDto } from "./dto/update-inserat.dto";
import { Benutzer } from "src/schemas/user.schema";
import { InseratErsteller } from "src/models/inserat/inseratErsteller.model";
import { InseratNEST } from "src/schemas/inserat.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PaginatorDto } from "./dto/paginator-inserat.dto";
import { InseratfilterDto } from "./dto/filter-inserat.dto";
import { MailingService } from "src/utils/mailing/mailing.service";
import { BenutzerService } from "../benutzer/benutzer.service";
import { InseratDateienService } from "./inserat-dateien.service";
import { InseratStatistikService } from "./inserat-statistik.service";
import { isSafeFilterValue } from "src/common/safe-filter-value";

/**
 * Verwaltet die Inserate selbst: anlegen, lesen, filtern, aktualisieren und
 * löschen. Datei-Handling (InseratDateienService) und geografische Auswertung
 * (InseratStatistikService) liegen in eigenen Services.
 */
@Injectable()
export class InseratService {
  private readonly logger = new Logger(InseratService.name);

  constructor(
    @InjectModel(InseratNEST.name) private inseratModel: Model<InseratNEST>,
    @InjectModel(Benutzer.name) private benutzerModel: Model<Benutzer>,

    private mailService: MailingService,
    private benutzerService: BenutzerService,
    private inseratDateienService: InseratDateienService,
    private inseratStatistikService: InseratStatistikService
  ) {}

  async create(user: Benutzer, createInseratDto: CreateInseratDto) {
    const {
      inseratBeschreibung,
      inseratStandort,
      inseratLogistik,
      inseratFilepath,
    } = createInseratDto;
    const createdAt = new Date();
    const inseratErsteller: InseratErsteller = {
      firma: user.firmendaten.firmenname,
      adresse: user.firmendaten.firmenadresse + "," + user.firmendaten.stadt,
      webseite: user.firmendaten.firmenwebseite,
      telefonnummer: user.firmendaten.telefonnummer,
      email: user.email,
      ansprechpartner: user.firmendaten.ansprechpartner,
      privateModus: user.privateModus,
    };
    const newInserat = new this.inseratModel({
      user: user._id,
      inseratBeschreibung,
      inseratStandort,
      inseratLogistik,
      inseratFilepath,
      createdAt,
      inseratErsteller,
    });

    try {
      const inserat = await newInserat.save();
      this.mailService.sendInseratErstelltConfirmation(user.email, inserat);
      this.benutzerService.updateStandortToStandortFavorit(
        user,
        inseratStandort
      );
      return {
        id: inserat._id,
        message: "Inserat erfolgreich erstellt",
      };
    } catch (error) {
      // Bisher wurde der Fehler nur geloggt und der Client bekam trotzdem
      // eine 201 mit Erfolgsform (siehe Ticket #7).
      this.logger.error(
        "Inserat konnte nicht gespeichert werden",
        error instanceof Error ? error.stack : String(error)
      );
      throw new InternalServerErrorException(
        "Bei der Erstellung des Inserats ist ein Fehler aufgetreten. Bitte versuche es erneut oder kontaktiere uns unter info@waste-connect.de"
      );
    }
  }

  async findAll() {
    const inserate = await this.inseratModel.find().select("-user").exec();
    return this.modifyPrivateInserate(inserate);
  }

  async getAllInserateForAdminPanel() {
    const inserate = await this.inseratModel
      .find()
      .select([
        "-user",
        "-inseratStandort",
        "-inseratLogistik",
        "-inseratFilepath",
        "-createdAt",
      ])
      .exec();
    return inserate;
  }

  async filterAndPaginate(
    filterInseratDto: InseratfilterDto,
    paginatorInseratDto: PaginatorDto
  ) {
    const { pageSize, currentPage } = paginatorInseratDto;
    let query = this.buildQuery(filterInseratDto);
    const totalInserate = await this.inseratModel.countDocuments(query).exec();
    let inserate = await this.inseratModel
      .find(query)
      .select("-user")
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize)
      .exec();

    if (!inserate || inserate.length === 0) {
      return {
        inserate: [],
        totalInserate: 0,
        numberOfInserate: 0,
        numberOfInserateByBundesland:
          await this.inseratStatistikService.getNumberOfInserateByBundesland(
            inserate
          ),
      };
    }

    return {
      inserate: this.modifyPrivateInserate(inserate),
      totalInserate,
      numberOfInserate: inserate.length,
      numberOfInserateByBundesland:
        await this.inseratStatistikService.getNumberOfInserateByBundesland(
          inserate
        ),
    };
  }

  async paginator(paginatorInseratDto: PaginatorDto) {
    const { pageSize, currentPage } = paginatorInseratDto;
    const totalInserate = await this.inseratModel.countDocuments().exec();
    const inserate = await this.inseratModel
      .find()
      .select("-user")
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize)
      .exec();
    return {
      inserate: this.modifyPrivateInserate(inserate),
      totalInserate,
    };
  }

  async filter(filterInseratDto: InseratfilterDto) {
    let inserate: InseratNEST[] = [];
    let query = this.buildQuery(filterInseratDto);

    inserate = await this.inseratModel.find(query).select("-user").exec();

    if (!inserate || inserate.length === 0) {
      return "Keine Inserate mit diesen Filterkriterien gefunden";
    }

    return {
      inserate: this.modifyPrivateInserate(inserate),
      numberOfInserate: inserate.length,
      numberOfInserateByBundesland:
        await this.inseratStatistikService.getNumberOfInserateByBundesland(
          inserate
        ),
    };
  }

  async getNumberOfFilterInserate(filterInseratDto: InseratfilterDto) {
    let query = this.buildQuery(filterInseratDto);
    const numberOfInserate = await this.inseratModel
      .countDocuments(query)
      .exec();
    return numberOfInserate;
  }

  private buildQuery(filterInseratDto: InseratfilterDto) {
    let query = {};
    if (filterInseratDto.inseratBeschreibung) {
      for (let key in filterInseratDto.inseratBeschreibung) {
        const value = filterInseratDto.inseratBeschreibung[key];
        if (value === undefined || value === "" || value === null) {
          continue;
        }
        if (!isSafeFilterValue(value)) {
          continue;
        }
        let prefix = "inseratBeschreibung";
        if (key.startsWith("standort_")) {
          prefix = "inseratStandort";
        }
        if (key === "abfallbezeichnung") {
          const regexPattern = new RegExp(value as string, "i");
          query[`${prefix}.${key}`] = regexPattern;
        } else {
          query[`${prefix}.${key}`] = value;
        }
      }
    }
    return query;
  }

  async findOneForDelete(id: string) {
    const inserat = await this.inseratModel.findById(id).exec();
    if (!inserat) {
      return { message: "Inserat nicht gefunden" };
    }
    return inserat;
  }

  async findOne(id: string) {
    const inserat = await this.inseratModel.findById(id).select("-user").exec();
    if (!inserat) {
      return "Inserat nicht gefunden";
    }
    return this.modifyPrivateInserate([inserat])[0];
  }

  async findOneWithUser(id: string) {
    const inserat = await this.inseratModel.findById(id).exec();
    if (!inserat) {
      return "Inserat nicht gefunden";
    }
    return inserat;
  }

  async myInserate(user: Benutzer) {
    const inserate = await this.inseratModel
      .find({ user: user._id })
      .select("-user")
      .exec();
    if (!inserate) {
      return { message: "Keine Inserate gefunden" };
    }
    return inserate;
  }

  async update(user: Benutzer, id: string, updateInseratDto: UpdateInseratDto) {
    this.benutzerService.updateStandortToStandortFavorit(
      user,
      updateInseratDto.inseratStandort
    );

    const inserat = await this.inseratModel.findByIdAndUpdate(
      id,
      updateInseratDto
    );
    if (!inserat) {
      return { message: "Inserat nicht gefunden" };
    }
    return { message: "Inserat erfolgreich aktualisiert" };
  }

  async adminDeleteInserat(id: string) {
    const inserat = await this.loescheInseratUndRaeumeAuf(id, id);

    if (!inserat) {
      return { message: "Inserat nicht gefunden" };
    }

    //Waste of the Day durchsuchen und löschen!

    this.mailService.sendInformationAdminDeletedInserat(
      inserat.inseratErsteller.ansprechpartner,
      inserat.inseratErsteller.email,
      inserat.inseratBeschreibung.abfallbezeichnung
    );

    return { message: "Inserat erfolgreich gelöscht" };
  }

  async remove(user: Benutzer, id: string) {
    const inserat = await this.loescheInseratUndRaeumeAuf(id, {
      _id: id,
      user: user._id,
    });

    if (!inserat) {
      return { message: "Inserat nicht gefunden" };
    }

    const inserate = await this.myInserate(user);
    return { message: `Du hast erfolgreich das Inserat gelöscht`, inserate };
  }

  /**
   * Löscht ein Inserat und räumt alles auf, was daran hängt: die Merkzettel
   * der Benutzer und die hochgeladenen Dateien. Wird sowohl beim Löschen durch
   * den Besitzer (Filter auf Inserat + Benutzer) als auch beim administrativen
   * Löschen (Filter nur auf das Inserat) genutzt.
   */
  private async loescheInseratUndRaeumeAuf(
    id: string,
    filter: string | { _id: string; user: unknown }
  ): Promise<InseratNEST | null> {
    const inserat = await this.inseratModel.findByIdAndDelete(filter as any);

    if (!inserat) {
      return null;
    }

    // Durchsuchen Sie alle Benutzer und entfernen Sie das gelöschte Inserat aus ihren Merkzetteln
    await this.benutzerModel.updateMany(
      { "benutzerinteraktionen.merkzettel._id": id },
      { $pull: { "benutzerinteraktionen.merkzettel": { _id: id } } }
    );

    await this.inseratDateienService.deleteFilesFromInseratPath(
      inserat.inseratFilepath.bildpath
    );
    await this.inseratDateienService.deleteFilesFromInseratPath(
      inserat.inseratFilepath.analysepath
    );

    return inserat;
  }

  async findInseratOfUser(user: Benutzer) {
    const inserate = await this.inseratModel
      .find({ user: user._id })
      .select("-user")
      .exec();
    return inserate;
  }

  modifyPrivateInserate(inserate: InseratNEST[]) {
    return inserate.map((inserat) => {
      if (inserat.inseratErsteller.privateModus) {
        inserat.inseratErsteller.adresse = "keine Angabe";
        inserat.inseratErsteller.telefonnummer = "keine Angabe";
        inserat.inseratErsteller.ansprechpartner = "keine Angabe";
        inserat.inseratErsteller.email = "keine Angabe";
      }
      return inserat;
    });
  }
}
