import { Types } from "mongoose";

/**
 * Adapter, den ein Profil-Modul (Entsorger, Logistiker, ...) an der
 * BenutzerProfilRegistry registriert, um beim Anlegen eines Benutzers ein
 * leeres Profil zu erstellen. Löst die direkte Kopplung des Auth-Moduls an
 * die einzelnen Profil-Domänen ab.
 */
export interface ProfilInitialisierer {
  erstelleProfil(benutzerId: Types.ObjectId): Promise<void>;
}
