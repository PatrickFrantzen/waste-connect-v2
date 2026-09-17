import { Injectable } from "@nestjs/common";
import { Types } from "mongoose";
import { ProfilInitialisierer } from "src/common/profil-initialisierer/profil-initialisierer.interface";
import { EntsorgerService } from "./entsorger.service";

@Injectable()
export class EntsorgerProfilInitialisierer implements ProfilInitialisierer {
  constructor(private readonly entsorgerService: EntsorgerService) {}

  erstelleProfil(benutzerId: Types.ObjectId): Promise<void> {
    return this.entsorgerService.create(benutzerId);
  }
}
