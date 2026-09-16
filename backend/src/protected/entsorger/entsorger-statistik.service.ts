import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntsorgerNEST } from "src/schemas/entsorger.schema";

/**
 * Geografische Auswertung der Entsorgerprofile.
 * Aus dem EntsorgerService herausgelöst (Ticket #6).
 */
@Injectable()
export class EntsorgerStatistikService {
  constructor(
    @InjectModel(EntsorgerNEST.name)
    private entsorgerModel: Model<EntsorgerNEST>
  ) {}

  async getGemeindenForBundesland(bundesland: string) {
    const entsorger = await this.entsorgerModel
      .find({ "firmendaten.bundesland": bundesland })
      .exec();

    const gemeindenMap = entsorger.reduce((map, entsorger) => {
      if (entsorger.firmendaten.stadt && entsorger.firmendaten.postleitzahl) {
        const gemeinde = map.get(entsorger.firmendaten.stadt) || {
          name: entsorger.firmendaten.stadt,
          value: 0,
          postleitzahl: entsorger.firmendaten.postleitzahl,
        };
        gemeinde.value += 1;
        map.set(entsorger.firmendaten.stadt, gemeinde);
      }
      return map;
    }, new Map());

    return Array.from(gemeindenMap.values());
  }
}
