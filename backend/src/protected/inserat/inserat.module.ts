import { Module } from "@nestjs/common";
import { InseratService } from "./inserat.service";
import { InseratDateienService } from "./inserat-dateien.service";
import { InseratStatistikService } from "./inserat-statistik.service";
import { InseratController } from "./inserat.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/unprotected/auth/auth.module";
import { InseratSchema } from "src/schemas/inserat.schema";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { MailingModule } from "src/utils/mailing/mailing.module";
import { ConfigModule } from "@nestjs/config";
import { BenutzerSchema } from "src/schemas/user.schema";
import { BenutzerModule } from "../benutzer/benutzer.module";

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: "InseratNEST", schema: InseratSchema },
      { name: "Benutzer", schema: BenutzerSchema },
    ]),
    AuthModule,
    BenutzerModule,
    MailingModule,
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
    }),
  ],
  controllers: [InseratController],
  providers: [InseratService, InseratDateienService, InseratStatistikService],
  exports: [InseratService, InseratDateienService, InseratStatistikService],
})
export class InseratModule {}
