import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './models/book.model';
import { Category } from '../category/models/category.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Book, Category]),
  JwtModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
