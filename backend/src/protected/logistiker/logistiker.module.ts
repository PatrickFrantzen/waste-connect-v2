import { Module } from '@nestjs/common';
import { LogistikerService } from './logistiker.service';
import { LogistikerProfilInitialisierer } from './logistiker-profil-initialisierer';
import { LogistikerController } from './logistiker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LogistikerSchema } from 'src/schemas/logistiker.schema';
import { AuthModule } from 'src/unprotected/auth/auth.module';
import { ProfilInitialisiererModule } from 'src/common/profil-initialisierer/profil-initialisierer.module';
import { BenutzerProfilRegistry } from 'src/common/profil-initialisierer/benutzer-profil.registry';

@Module({
  imports: [
    MongooseModule.forFeature([{name: "LogistikerNEST", schema: LogistikerSchema}]),
    AuthModule,
    ProfilInitialisiererModule,
  ],
  controllers: [LogistikerController],
  providers: [
    LogistikerService,
    LogistikerProfilInitialisierer,
    {
      // Siehe entsorger.module.ts: Seiteneffekt-Registrierung, kein Consumer
      // injiziert dieses Token.
      provide: "LOGISTIKER_PROFIL_REGISTRIERUNG",
      useFactory: (
        registry: BenutzerProfilRegistry,
        initialisierer: LogistikerProfilInitialisierer
      ) => registry.register(initialisierer),
      inject: [BenutzerProfilRegistry, LogistikerProfilInitialisierer],
    },
  ],
  exports: [LogistikerService],
})
export class LogistikerModule {}
