import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Roles } from 'generated/prisma';
import { CurrentUser } from 'src/user/decorators/user.decorator';
import { GetCategoriesDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Auth(Roles.ADMIN, Roles.USER)
  @HttpCode(200)
  @Post('get-categories')
  async getCategories(@CurrentUser('id') userId: string, @Body() dto: GetCategoriesDto) {
    const categories = await this.categoryService.getCategories(dto, userId);

    return categories;
  }
}
