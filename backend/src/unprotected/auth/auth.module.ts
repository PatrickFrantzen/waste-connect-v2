import { Module, forwardRef } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { BenutzerSchema } from "src/schemas/user.schema";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { EntsorgerModule } from "src/protected/entsorger/entsorger.module";
import { LogistikerModule } from "src/protected/logistiker/logistiker.module";
import { MailingModule } from "src/utils/mailing/mailing.module";

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService], // [ConfigService
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get("JWT_SECRET"),
        signOptions: { expiresIn: "1d" },
      }),
    }),
    MongooseModule.forFeature([{ name: "Benutzer", schema: BenutzerSchema }]),
    forwardRef(() => EntsorgerModule),
    forwardRef(() => LogistikerModule),
    MailingModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
