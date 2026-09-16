import { Module } from "@nestjs/common";
import { UploadsService } from "./uploads.service";
import { UploadsController } from "./uploads.controller";
import { AuthModule } from "src/unprotected/auth/auth.module";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { InseratModule } from "src/protected/inserat/inserat.module";
import { EntsorgerModule } from "src/protected/entsorger/entsorger.module";
import { LogistikerModule } from "src/protected/logistiker/logistiker.module";
import { ConfigModule } from "@nestjs/config";
import { MailingModule } from "src/utils/mailing/mailing.module";
import { BenutzerModule } from "../benutzer/benutzer.module";

@Module({
  imports: [
    BenutzerModule,
    LogistikerModule,
    MailingModule,
    ConfigModule,
    AuthModule,
    InseratModule,
    EntsorgerModule,
    MulterModule.register({
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          // Generate a unique name for each file
          const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
          const fileExtName = extname(file.originalname);
          const baseName = file.originalname.replace(fileExtName, "");
          cb(null, `${baseName}-${uniqueSuffix}${fileExtName}`);
        },
      }),
    })
  ],
  controllers: [UploadsController],
  providers: [
    UploadsService
  ],
})
export class UploadsModule {}
