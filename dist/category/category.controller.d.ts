import { CategoryService } from './category.service';
import { CreateCategory } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(dto: CreateCategory): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        title: string;
    }>;
}
