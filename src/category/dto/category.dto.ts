import { IsString } from 'class-validator';

export class GetCategoriesDto {
  title: string;
}

export class AddCategoryDto {
  @IsString()
  title: string;
}
