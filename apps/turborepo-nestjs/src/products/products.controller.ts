import { Body, Controller, Post, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductRequest } from '@repo/types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) { }

  @Post()
  createProduct(@Body() createProductRequest: CreateProductRequest) {
    return this.productService.createProduct(createProductRequest);
  }

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
}
