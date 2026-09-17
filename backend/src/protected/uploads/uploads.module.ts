import { Module } from "@nestjs/common";
import { UploadsService } from "./uploads.service";
import { UploadsController } from "./uploads.controller";
import { AuthModule } from "src/unprotected/auth/auth.module";
import { MulterModule } from "@nestjs/platform-express";
import { InseratModule } from "src/protected/inserat/inserat.module";
import { EntsorgerModule } from "src/protected/entsorger/entsorger.module";
import { LogistikerModule } from "src/protected/logistiker/logistiker.module";
import { ConfigModule } from "@nestjs/config";
import { MailingModule } from "src/utils/mailing/mailing.module";
import { BenutzerModule } from "../benutzer/benutzer.module";
import { uploadStorageOptions } from "src/utils/uploads/upload-storage.options";

@Module({
  imports: [
    BenutzerModule,
    LogistikerModule,
    MailingModule,
    ConfigModule,
    AuthModule,
    InseratModule,
    EntsorgerModule,
    MulterModule.register(uploadStorageOptions)
  ],
  controllers: [UploadsController],
  providers: [
    UploadsService
  ],
})
export class UploadsModule {}
