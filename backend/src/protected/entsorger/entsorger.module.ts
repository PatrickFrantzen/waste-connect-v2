import { Module, forwardRef } from '@nestjs/common';
import { EntsorgerService } from './entsorger.service';
import { EntsorgerDateienService } from './entsorger-dateien.service';
import { EntsorgerStatistikService } from './entsorger-statistik.service';
import { EntsorgerController } from './entsorger.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EntsorgerSchema } from 'src/schemas/entsorger.schema';
import { AuthModule } from 'src/unprotected/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "EntsorgerNEST", schema: EntsorgerSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [EntsorgerController],
  providers: [EntsorgerService, EntsorgerDateienService, EntsorgerStatistikService],
  exports: [EntsorgerService, EntsorgerDateienService, EntsorgerStatistikService],
})
export class EntsorgerModule {}
