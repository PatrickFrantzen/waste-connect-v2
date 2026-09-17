import { Module } from "@nestjs/common";
import { BenutzerProfilRegistry } from "./benutzer-profil.registry";

/**
 * Bewusst abhängigkeitsfrei (keine Imports): Sowohl AuthModule als auch die
 * Profil-Module (Entsorger, Logistiker, ...) importieren dieses Modul, ohne
 * sich gegenseitig zu kennen. Damit entfällt der bisherige Modul-Zyklus
 * AuthModule <-> EntsorgerModule/LogistikerModule.
 */
@Module({
  providers: [BenutzerProfilRegistry],
  exports: [BenutzerProfilRegistry],
})
export class ProfilInitialisiererModule {}
