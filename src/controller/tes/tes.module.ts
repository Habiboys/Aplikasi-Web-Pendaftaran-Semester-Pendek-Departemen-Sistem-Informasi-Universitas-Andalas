import { Module } from '@nestjs/common';
import { TesController } from "./tes.controller";
import { TesService } from "./tes.service";

@Module({
    controllers: [TesController],
    providers: [TesService],
  })
  export class TesModule {}