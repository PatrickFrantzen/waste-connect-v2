import { BenutzerProfilRegistry } from "./benutzer-profil.registry";
import { ProfilInitialisierer } from "./profil-initialisierer.interface";

/**
 * Löst die zirkuläre Modul-Kopplung Auth <-> Entsorger/Logistiker ab (siehe
 * ADR-Diskussion): AuthService kennt nur noch diese Registry, nicht mehr
 * EntsorgerService/LogistikerService konkret. Entsorger/Logistiker tragen
 * sich hier selbst ein.
 */
describe("BenutzerProfilRegistry", () => {
  it("ist zu Beginn leer", () => {
    const registry = new BenutzerProfilRegistry();
    expect(registry.getAll()).toEqual([]);
  });

  it("liefert alle registrierten Initialisierer in Registrierungsreihenfolge", () => {
    const registry = new BenutzerProfilRegistry();
    const entsorger: ProfilInitialisierer = { erstelleProfil: jest.fn() };
    const logistiker: ProfilInitialisierer = { erstelleProfil: jest.fn() };

    registry.register(entsorger);
    registry.register(logistiker);

    expect(registry.getAll()).toEqual([entsorger, logistiker]);
  });

  it("gibt eine Kopie zurück, externe Mutation verändert die Registry nicht", () => {
    const registry = new BenutzerProfilRegistry();
    const entsorger: ProfilInitialisierer = { erstelleProfil: jest.fn() };
    registry.register(entsorger);

    registry.getAll().pop();

    expect(registry.getAll()).toHaveLength(1);
  });
});
