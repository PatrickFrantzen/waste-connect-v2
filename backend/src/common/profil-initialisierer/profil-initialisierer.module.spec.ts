import { Module } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { BenutzerProfilRegistry } from "./benutzer-profil.registry";
import { ProfilInitialisiererModule } from "./profil-initialisierer.module";

/**
 * Beweist den Selbstregistrierungs-Mechanismus, auf dem EntsorgerModule und
 * LogistikerModule aufbauen: ein Factory-Provider, den niemand explizit
 * injiziert, wird trotzdem instanziiert, weil Nest beim Bootstrap alle in
 * providers[] deklarierten Provider eines importierten Moduls auflöst.
 * Ohne dieses Verhalten würde sich kein Profil-Modul jemals eintragen.
 */
const FAKE_REGISTRATION = Symbol("FAKE_REGISTRATION");

@Module({
  imports: [ProfilInitialisiererModule],
  providers: [
    {
      provide: FAKE_REGISTRATION,
      useFactory: (registry: BenutzerProfilRegistry) => {
        registry.register({ erstelleProfil: jest.fn() });
      },
      inject: [BenutzerProfilRegistry],
    },
  ],
})
class SelbstRegistrierendesTestModul {}

describe("ProfilInitialisiererModule: Selbstregistrierungs-Mechanismus", () => {
  it("instanziiert einen Factory-Provider, den niemand injiziert, beim Modul-Bootstrap", async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [SelbstRegistrierendesTestModul],
    }).compile();
    await moduleRef.init();

    const registry = moduleRef.get(BenutzerProfilRegistry);

    expect(registry.getAll()).toHaveLength(1);
  });
});
