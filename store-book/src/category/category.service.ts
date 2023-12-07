import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private readonly categoryRepo: typeof Category
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepo.create(createCategoryDto);
    return category;
  }

  async findAll() {
    const category = await this.categoryRepo.findAll({include: {all: true}})
    if(!category) {
      return {message: 'Categories not found'}
    }
    return category;
  }

  async findOne(id: number) {
    const category = await this.categoryRepo.findOne({where: {id}, include: {all: true}})
    if(!category) {
      return {message: 'Category not found'}
    }
    return category;
  }

  async findName(name: string) {
    const category = await this.categoryRepo.findOne({where: {name:name}, include: {all:true}})
    if(!category) {
      return {message: 'Category not found'}
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepo.update(updateCategoryDto, {where: {id}, returning: true});
    return category[1][0];
  }

  async remove(id: number) {
    const category = await this.categoryRepo.destroy({where: {id}})
    if(!category) {
      return {message: 'Category not found'}
    }
    return { message: 'Category delated'};
    
  }
}
