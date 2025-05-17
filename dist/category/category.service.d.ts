import { PrismaService } from 'src/prisma.service';
import { CreateCategory } from './dto/category.dto';
export declare class CategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCategory): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        title: string;
    }>;
}
