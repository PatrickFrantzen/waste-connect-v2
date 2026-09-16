import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConnectionService } from './connection/connection.service';
import { AuthModule } from './unprotected/auth/auth.module';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { BenutzerModule } from './protected/benutzer/benutzer.module';
import { InseratModule } from './protected/inserat/inserat.module';
import { UploadsModule } from './protected/uploads/uploads.module';
import { EntsorgerModule } from './protected/entsorger/entsorger.module';
import { LogistikerModule } from './protected/logistiker/logistiker.module';
import { AngeboteModule } from './unprotected/angebote/angebote.module';
import { EmailModule } from './mixed-routes/email/email.module';
import { OfTheDayCalendarModule } from './protected/of-the-day-calendar/of-the-day-calendar.module';
import { HealthModule } from './health/health.module';
import { SpaController } from './spa.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const user = configService.get("MONGODB_URI");
        const password = configService.get("MONGODB_PW");
        const cluster = configService.get("MONGODB_CLUSTER");
        return {
          uri: `${user}${password}${cluster}`,
        };
      }
    }),
    AuthModule,
    BenutzerModule,
    InseratModule,
    UploadsModule,
    EntsorgerModule,
    LogistikerModule,
    AngeboteModule,
    EmailModule,
    OfTheDayCalendarModule,
    HealthModule,
  ],
  controllers: [SpaController],
  providers: [ConnectionService],
})
export class AppModule {}