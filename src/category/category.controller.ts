import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateCategory } from './dto/category.dto';
import { Roles } from 'generated/prisma';
import { CurrentUser } from 'src/user/decorators/user.decorator';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Auth(Roles.USER, Roles.ADMIN)
  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: CreateCategory, @CurrentUser('id') id: string) {
    const category = await this.categoryService.create(dto, id);

    return category;
  }

  @Auth(Roles.USER, Roles.ADMIN)
  @HttpCode(200)
  @Get('get')
  async get(@CurrentUser('id') id: string) {
    const categories = await this.categoryService.get(id);

    return categories;
  }
}
