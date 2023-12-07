import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from './models/book.model';
import { AdminGuard } from '../guards/admin.guard';
import { FindBookDto } from './dto/find-book.dto';

@ApiTags('Books')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({summary: 'Creating Book'})
  @ApiResponse({status: 200, description: 'Dates of new Book', type: Book})
  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @ApiOperation({summary: 'Finding all books'})
  @ApiResponse({status: 200, description: 'List of books', type: [Book]})
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Post('search')
  search(@Body() findBookDto: FindBookDto) {
    return this.bookService.search(findBookDto);
  }


  @ApiOperation({summary: 'Finding Book by id'})
  @ApiResponse({status: 200, description: 'Book', type: Book})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @ApiOperation({summary: 'Updating Book'})
  @ApiResponse({status: 200, description: 'Updated Book', type: Book})
  @Patch(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @ApiOperation({summary: 'Deleting Book by id'})
  @ApiResponse({status: 200, description: 'The book deleted or not', type: String})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
