import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
        image_link: createCategoryDto.image_link,
      },
    });
  }

  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException(`Categoria com o ${id} não encontrado`);
    }
    return category;
  }

  async remove(id: number): Promise<Category> {
    const categoryToDelete = await this.prisma.category.findUnique({
      where: { id },
    });
    if (!categoryToDelete) {
      throw new NotFoundException(`Categoria com o ${id} não encontrado`);
    }
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
