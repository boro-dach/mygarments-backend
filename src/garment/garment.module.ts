import { Module } from '@nestjs/common';
import { GarmentService } from './garment.service';
import { GarmentController } from './garment.controller';

@Module({
  controllers: [GarmentController],
  providers: [GarmentService],
})
export class GarmentModule {}
