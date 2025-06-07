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

  async deleteCategory(id: string, userId: string) {
    const category = await this.prisma.category.delete({
      where: {
        id: id,
        userId: userId,
      },
    });

    return category;
  }
}
