import { Controller } from '@nestjs/common';
import { GarmentService } from './garment.service';

@Controller('garment')
export class GarmentController {
  constructor(private readonly garmentService: GarmentService) {}
}
