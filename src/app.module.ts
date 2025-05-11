import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { GarmentModule } from './garment/garment.module';

@Module({
  imports: [UserModule, AuthModule, CategoryModule, GarmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
