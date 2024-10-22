import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsPositive,
  IsArray,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  sku: string;

  @IsNumber()
  @IsPositive()
  categoryId: number;

  @IsString()
  description: string;

  @IsString()
  large_description: string;

  @IsPositive()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  discount_price?: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  discount_percent?: number;

  @IsOptional()
  @IsBoolean()
  is_new?: boolean;

  @IsString()
  image: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsOptional()
  @IsString()
  discount?: string;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  @IsNumber()
  reviewCount?: number;

  @IsString()
  additionalInfo: string;
}