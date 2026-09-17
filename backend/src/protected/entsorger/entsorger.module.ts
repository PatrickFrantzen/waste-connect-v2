import { Module } from '@nestjs/common';
import { EntsorgerService } from './entsorger.service';
import { EntsorgerDateienService } from './entsorger-dateien.service';
import { EntsorgerStatistikService } from './entsorger-statistik.service';
import { EntsorgerProfilInitialisierer } from './entsorger-profil-initialisierer';
import { EntsorgerController } from './entsorger.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EntsorgerSchema } from 'src/schemas/entsorger.schema';
import { AuthModule } from 'src/unprotected/auth/auth.module';
import { ProfilInitialisiererModule } from 'src/common/profil-initialisierer/profil-initialisierer.module';
import { BenutzerProfilRegistry } from 'src/common/profil-initialisierer/benutzer-profil.registry';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "EntsorgerNEST", schema: EntsorgerSchema }]),
    AuthModule,
    ProfilInitialisiererModule,
  ],
  controllers: [EntsorgerController],
  providers: [
    EntsorgerService,
    EntsorgerDateienService,
    EntsorgerStatistikService,
    EntsorgerProfilInitialisierer,
    {
      // Kein Consumer injiziert dieses Token bewusst - der Sinn ist der
      // Seiteneffekt der Factory (Selbstregistrierung an der Registry), den
      // Nest beim Bootstrap durch die eager Instanziierung aller
      // providers[] auslöst (siehe profil-initialisierer.module.spec.ts).
      provide: "ENTSORGER_PROFIL_REGISTRIERUNG",
      useFactory: (
        registry: BenutzerProfilRegistry,
        initialisierer: EntsorgerProfilInitialisierer
      ) => registry.register(initialisierer),
      inject: [BenutzerProfilRegistry, EntsorgerProfilInitialisierer],
    },
  ],
  exports: [EntsorgerService, EntsorgerDateienService, EntsorgerStatistikService],
})
export class EntsorgerModule {}
