import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Category } from './models/category.model';
import { Book } from '../book/models/book.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Category, Book]),
    JwtModule.register({})
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
