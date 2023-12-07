import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './models/book.model';
import { FindBookDto } from './dto/find-book.dto';
import { Op } from 'sequelize';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book) private readonly bookRepo: typeof Book
  ){}

  async create(createBookDto: CreateBookDto) {
    const book = await this.bookRepo.create(createBookDto);
    return book;
  }

  async findAll() {
    const books = await this.bookRepo.findAll({include: {all: true}})
    return books;
  }


  async findOne(id: number) {
    const book = await this.bookRepo.findOne({where: {id}, include: {all: true}})
    if(!book) {
      return {message: 'This book not found'}
    }
    return book;
  }

  async search(findBookDto: FindBookDto) {
    const where = {};
    if(findBookDto.author) {
      where['author'] = { [Op.like]: `%${findBookDto.author}%`}
    }
    if(findBookDto.title) {
      where['title'] = { [Op.like]: `%${findBookDto.title}%`}
    }
  const books = await this.bookRepo.findAll({where});
  if (!books) {
    throw new BadRequestException('Book not found')
  }
    return books;
  }





  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.bookRepo.update(updateBookDto, {where: {id}, returning: true});
    return book[1][0];
  }

  async remove(id: number) {
    const book = await this.bookRepo.destroy({where: {id}})
    if(!book) {
      return {message: 'Book not found'}
    }
    return { message: 'Book delated'};
  }
}
