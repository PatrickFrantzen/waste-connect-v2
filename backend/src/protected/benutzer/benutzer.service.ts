import { Injectable } from "@nestjs/common";
import { UpdateBenutzerDto } from "./dto/update-benutzer.dto";
import { Benutzer } from "src/schemas/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntsorgerService } from "src/protected/entsorger/entsorger.service";
import { first } from "rxjs";
import {
  Entsorgerfilter,
  Inseratfilter,
} from "src/models/benutzer/profilfilter.model";
import { InseratNEST } from "src/schemas/inserat.schema";
import { ObjectId } from "mongodb";
import { PaginatorDto } from "../inserat/dto/paginator-inserat.dto";
import { Logistiker } from "../logistiker/entities/logistiker.entity";
import { LogistikerService } from "../logistiker/logistiker.service";
import { InseratStandort } from "src/models/inserat/inseratStandort.model";

@Injectable()
export class BenutzerService {
  constructor(
    @InjectModel(Benutzer.name) private benutzerModel: Model<Benutzer>,
    @InjectModel(InseratNEST.name) private inseratModel: Model<InseratNEST>,
    private entsorgerService: EntsorgerService,
    private logistikerService: LogistikerService
  ) {}

  async getFirmendaten(user: Benutzer) {
    return user.firmendaten;
  }

  async getBenutzerinteraktionen(user: Benutzer) {
    return user.benutzerinteraktionen;
  }

  async getProfile(user: Benutzer) {
    return user.profile;
  }

  async getPrivate(user: Benutzer) {
    return user.privateModus;
  }

  async getLetzteSucheInserat(user: Benutzer) {
    return user.benutzerinteraktionen.letzteSuche;
  }

  async getMerkzettel(user: Benutzer) {
    return user.benutzerinteraktionen.merkzettel;
  }

  async checkMerkzettel(user: Benutzer, inseratId: string) {
    const isInMerkzettel = user.benutzerinteraktionen.merkzettel.some(
      (inserat) => inserat._id.toString() === inseratId
    );
    return isInMerkzettel;
  }

  //Update komplett überarbeiten.
  //Jeder Bereich des Benutzers sollte einzeln upgedatet werden können.
  //Daten sollten nicht komplett überschrieben werden.

  async update(
    user: Benutzer,
    updateBenutzerDto: UpdateBenutzerDto
  ): Promise<{ message: string }> {
    await this.benutzerModel.updateOne(
      { _id: user._id },
      {
        $set: {
          firmendaten: updateBenutzerDto.firmendaten,
          privateModus: updateBenutzerDto.privateModus,
          benutzerinteraktionen: updateBenutzerDto.benutzerinteraktionen,
          profile: updateBenutzerDto.profile,
          "benutzerdaten.firstLogin":
            updateBenutzerDto.benutzerdaten.firstLogin,
          messages: updateBenutzerDto.messages,
        },
      }
    );
    await this.changeStatusOfEntsorgerAndLogistiker(user, updateBenutzerDto);
    await this.changePrivateModusOfInserate(
      user,
      updateBenutzerDto.privateModus
    );
    return { message: `Deine Daten wurden aktualisiert.` };
  }

  async changePrivateModusOfInserate(user: Benutzer, privateModus: boolean) {
    await this.inseratModel.updateMany(
      { user: user._id },
      { $set: { "inseratErsteller.privateModus": privateModus } }
    );
  }

  async updateLetzteSuche(
    user: Benutzer,
    letzteSuche: Inseratfilter
  ): Promise<void> {
    if (
      letzteSuche === undefined ||
      Object.values(letzteSuche).every(
        (val) => val === "" || val === null || val === undefined
      )
    ) {
      return;
    }
    await this.benutzerModel.findOneAndUpdate(
      { _id: user._id },
      {
        $push: {
          "benutzerinteraktionen.letzteSuche": {
            $each: [letzteSuche],
            $slice: -5,
          },
        },
      }
    );
  }

  async updateLetzteSucheEntsorger(
    user: Benutzer,
    letzteSuche: Entsorgerfilter
  ): Promise<void> {
    await this.benutzerModel.findOneAndUpdate(
      { _id: user._id },
      {
        $push: {
          "benutzerinteraktionen.letzteSucheEntsorger": {
            $each: [letzteSuche],
            $slice: -5,
          },
        },
      }
    );
  }

  async updateMerkzettel(
    user: Benutzer,
    inseratId: string
  ): Promise<{ message: string }> {
    const inserat = await this.inseratModel.findOne({ _id: inseratId });

    const userDocument = await this.benutzerModel.findOne({ _id: user._id });

    const inseratExistsInMerkzettel =
      userDocument.benutzerinteraktionen.merkzettel.some(
        (merkzettelInserat) => merkzettelInserat._id.toString() === inseratId
      );

    if (inseratExistsInMerkzettel) {
      await this.benutzerModel.findOneAndUpdate(
        { _id: user._id },
        {
          $pull: {
            "benutzerinteraktionen.merkzettel": {
              _id: new ObjectId(inseratId),
            },
          },
        }
      );
      return { message: `Das Inserat wurde vom Merkzettel entfernt.` };
    } else {
      await this.benutzerModel.findOneAndUpdate(
        { _id: user._id },
        {
          $push: {
            "benutzerinteraktionen.merkzettel": inserat,
          },
        }
      );
      return { message: `Das Inserat wurde zum Merkzettel hinzugefügt.` };
    }
  }

  updateStandortToStandortFavorit(user: Benutzer, standort: InseratStandort) {
    const standortFavorit = {
      bundesland: standort.standort_Bundesland,
      stadt: standort.standort_Gemeinde,
      postleitzahl: standort.standort_Postleitzahl,
    };
    this.benutzerModel.updateOne(
      { _id: user._id },
      {
        $addToSet: {
          "firmendaten.standortFavoriten": standortFavorit,
        },
      }
    ).exec();
  }

  async remove(userid: string) {
    await this.benutzerModel.deleteOne({ _id: userid });
    return `Dein Account wurde gelöscht.`;
  }

  async removeFromMerkzettel(
    user: Benutzer,
    inseratId: string
  ): Promise<{ message: string; merkzettel: InseratNEST[] }> {
    await this.benutzerModel.findOneAndUpdate(
      { _id: user._id },
      {
        $pull: {
          "benutzerinteraktionen.merkzettel": {
            _id: inseratId,
          },
        },
      },
      { new: true }
    );
    return {
      message: `Das Inserat wurde vom Merkzettel entfernt.`,
      merkzettel: user.benutzerinteraktionen.merkzettel,
    };
  }

  async changeStatusOfEntsorgerAndLogistiker(
    user: Benutzer,
    updateBenutzerDto: UpdateBenutzerDto
  ) {
    this.entsorgerService.changeIsActivatedStatusOfEntsorger(
      user,
      updateBenutzerDto.profile.entsorger
    );
    this.entsorgerService.changePrivateStatusOfEntsorger(
      user,
      updateBenutzerDto.privateModus
    );
    this.logistikerService.changeIsActivatedStatusOfLogistiker(
      user,
      updateBenutzerDto.profile.logistik
    );
    this.logistikerService.changePrivateStatusOfLogistiker(
      user,
      updateBenutzerDto.privateModus
    );
  }

  async getMessages(user: Benutzer) {
    const getLastTenGesendeteNachrichten =
      user.messages.gesendeteNachrichten.slice(-10);
    const numberOfGesendeteNachrichten =
      user.messages.numberOfGesendeteNachrichten;
    const getLastTenEmpfangeneNachrichten =
      user.messages.empfangeneNachrichten.slice(-10);
    const numberOfEmpfangeneNachrichten =
      user.messages.numberOfEmpfangeneNachrichten;

    return {
      getLastTenGesendeteNachrichten,
      numberOfGesendeteNachrichten,
      getLastTenEmpfangeneNachrichten,
      numberOfEmpfangeneNachrichten,
    };
  }

  async getMessagesByStatusForPaginator(
    user: Benutzer,
    status: "gesendete" | "empfangene",
    paginatorDto: PaginatorDto
  ) {
    const { pageSize, currentPage } = paginatorDto;

    const messages = user.messages[`${status}Nachrichten`];

    const numberOfMessages =
      user.messages[
        `numberOf${status.charAt(0).toUpperCase() + status.slice(1)}Nachrichten`
      ];
    const lastMessageIndex = pageSize * currentPage;
    const firstMessageIndex = lastMessageIndex - pageSize;
    const messagesForPaginator = messages
      .slice(firstMessageIndex, lastMessageIndex)
      .reverse();

    return {
      nachrichten: messagesForPaginator,
      numberOfNachrichten: numberOfMessages,
    };
  }
}
