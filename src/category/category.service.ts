import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategory } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCategory, id: string) {
    const category = await this.prisma.category.create({
      data: {
        title: dto.title,
        userId: id,
      },
    });

    return category;
  }

  async get(id: string) {
    const categories = await this.prisma.category.findMany({
      where: { userId: id },
    });

    return categories;
  }
}
