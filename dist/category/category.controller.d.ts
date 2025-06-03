import { CategoryService } from './category.service';
import { GetCategoriesDto } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategories(userId: string, dto: GetCategoriesDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        title: string;
        userId: string;
    }[]>;
}
