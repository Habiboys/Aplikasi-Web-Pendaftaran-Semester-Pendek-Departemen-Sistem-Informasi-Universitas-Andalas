import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesController } from './controller/tes/tes.controller';
import { TesService } from './controller/tes/tes.service';
import { TesModule } from './controller/tes/tes.module';

@Module({
  imports: [TesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
