import { PrismaService } from 'src/prisma.service';
import { GetCategoriesDto } from './dto/category.dto';
export declare class CategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCategories(dto: GetCategoriesDto, userId: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        title: string;
        userId: string;
    }[]>;
}
