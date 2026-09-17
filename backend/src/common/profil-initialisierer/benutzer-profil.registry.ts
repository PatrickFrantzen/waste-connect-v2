import { Injectable } from "@nestjs/common";
import { ProfilInitialisierer } from "./profil-initialisierer.interface";

/** Sammelt die ProfilInitialisierer, die sich beim Modul-Start eintragen. */
@Injectable()
export class BenutzerProfilRegistry {
  private readonly initialisierer: ProfilInitialisierer[] = [];

  register(initialisierer: ProfilInitialisierer): void {
    this.initialisierer.push(initialisierer);
  }

  getAll(): ProfilInitialisierer[] {
    return [...this.initialisierer];
  }
}
