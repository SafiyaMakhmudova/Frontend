import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './models/category.model';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({summary: 'Creating category'})
  @ApiResponse({status: 200, description: 'Dates of Customer', type: Category})
  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @ApiOperation({summary: 'Getting all categories'})
  @ApiResponse({status: 200, description: 'Categories', type: [Category]})
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  
  @ApiOperation({summary: 'Getting category by id'})
  @ApiResponse({status: 200, description: 'Category', type: Category})
  @Get(":name")
  findCategory(@Param('name') name: string) {
    return this.categoryService.findName(name);
  }

  @ApiOperation({summary: 'Getting category by id'})
  @ApiResponse({status: 200, description: 'Category', type: Category})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  

  @ApiOperation({summary: 'Updating'})
  @ApiResponse({status: 200, description: 'Updated category', type: Category})
  @Patch(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @ApiOperation({summary: 'Delating category'})
  @ApiResponse({status: 200, description: 'Category delated', type: String})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
