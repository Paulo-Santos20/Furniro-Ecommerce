import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  InternalServerErrorException,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/updateProductDto';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    console.log('Request for product ID:', id); // Debug log
    const product = await this.productService.findOne(+id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    try {
      const deletedProduct = await this.productService.remove(id);
      if (!deletedProduct) {
        throw new NotFoundException(`Produto com ID ${id} não encontrado`);
      }
      return deletedProduct;
    } catch (error) {
      console.error('Erro ao tentar excluir o produto:', error);
      throw new InternalServerErrorException(
        'Erro ao tentar excluir o produto',
      );
    }
  }
}
