import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GetCategoriesDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategories(dto: GetCategoriesDto, userId: string) {
    const categories = await this.prisma.category.findMany({
      where: {
        title: dto.title,
        userId: userId,
      },
    });

    return categories;
  }

  async addCategory(dto: GetCategoriesDto, userId: string) {
    const category = await this.prisma.category.create({
      data: {
        title: dto.title,
        userId: userId,
      },
    });

    return category;
  }
}
