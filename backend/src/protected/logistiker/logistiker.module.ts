import { Module, forwardRef } from '@nestjs/common';
import { LogistikerService } from './logistiker.service';
import { LogistikerController } from './logistiker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LogistikerSchema } from 'src/schemas/logistiker.schema';
import { AuthModule } from 'src/unprotected/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: "LogistikerNEST", schema: LogistikerSchema}]),
    forwardRef(() => AuthModule),
  ],
  controllers: [LogistikerController],
  providers: [LogistikerService],
  exports: [LogistikerService],
})
export class LogistikerModule {}
