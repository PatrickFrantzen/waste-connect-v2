import { Module } from "@nestjs/common";
import { BenutzerService } from "./benutzer.service";
import { BenutzerController } from "./benutzer.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/unprotected/auth/auth.module";
import { BenutzerSchema } from "src/schemas/user.schema";
import { EntsorgerModule } from "src/protected/entsorger/entsorger.module";
import { LogistikerModule } from "src/protected/logistiker/logistiker.module";
import { InseratSchema } from "src/schemas/inserat.schema";
@Module({
  imports: [
    EntsorgerModule,
    LogistikerModule,
    MongooseModule.forFeature([
      { name: "Benutzer", schema: BenutzerSchema },
      { name: "InseratNEST", schema: InseratSchema },
    ]),
    AuthModule
  ],
  controllers: [BenutzerController],
  providers: [BenutzerService],
  exports: [BenutzerService],
})
export class BenutzerModule {}
