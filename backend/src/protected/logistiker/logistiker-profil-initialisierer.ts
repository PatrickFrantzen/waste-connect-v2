import { Injectable } from "@nestjs/common";
import { Types } from "mongoose";
import { ProfilInitialisierer } from "src/common/profil-initialisierer/profil-initialisierer.interface";
import { LogistikerService } from "./logistiker.service";

@Injectable()
export class LogistikerProfilInitialisierer implements ProfilInitialisierer {
  constructor(private readonly logistikerService: LogistikerService) {}

  erstelleProfil(benutzerId: Types.ObjectId): Promise<void> {
    return this.logistikerService.create(benutzerId);
  }
}
