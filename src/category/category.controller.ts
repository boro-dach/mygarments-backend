import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateCategory } from './dto/category.dto';
import { Role } from 'src/auth/decorators/roles.decorator';
import { Roles } from 'generated/prisma';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Auth(Roles.USER, Roles.ADMIN)
  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: CreateCategory) {
    const category = await this.categoryService.create(dto);

    return category;
  }
}
