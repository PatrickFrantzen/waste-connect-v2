import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { InseratNEST } from "src/schemas/inserat.schema";
import { zaehleNachBundesland } from "src/utils/statistik/bundeslaender";

/**
 * Geografische Auswertung der Inserate (Bundesländer- und Gemeindenzahlen).
 * Aus dem InseratService herausgelöst, damit dieser nur noch die Inserate
 * selbst verwaltet (Ticket #6).
 */
@Injectable()
export class InseratStatistikService {
  constructor(
    @InjectModel(InseratNEST.name) private inseratModel: Model<InseratNEST>
  ) {}

  async getBundeslaenderAnzahl() {
    const inserate = await this.inseratModel.find().exec();
    return this.getNumberOfInserateByBundesland(inserate);
  }

  async getGemeindenForBundesland(bundesland: string) {
    const inserate = await this.inseratModel
      .find({ "inseratStandort.standort_Bundesland": bundesland })
      .exec();

    const gemeindenMap = inserate.reduce((map, inserat) => {
      if (
        inserat.inseratStandort.standort_Gemeinde &&
        inserat.inseratStandort.standort_Postleitzahl
      ) {
        const gemeinde = map.get(inserat.inseratStandort.standort_Gemeinde) || {
          name: inserat.inseratStandort.standort_Gemeinde,
          value: 0,
          postleitzahl: inserat.inseratStandort.standort_Postleitzahl,
        };
        gemeinde.value += 1;
        map.set(inserat.inseratStandort.standort_Gemeinde, gemeinde);
      }
      return map;
    }, new Map());

    return Array.from(gemeindenMap.values());
  }

  async getNumberOfInserateByBundesland(matchingInserate: InseratNEST[]) {
    try {
      return zaehleNachBundesland(
        matchingInserate,
        (inserat) => inserat.inseratStandort.standort_Bundesland
      );
    } catch (error) {
      throw new InternalServerErrorException(
        "Fehler beim Ermitteln der Bundesländeranzahl"
      );
    }
  }
}
