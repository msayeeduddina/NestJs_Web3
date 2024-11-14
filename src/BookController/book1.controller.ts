import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { BookExceptionFilter } from 'src/BookException/book.exception.filter';
import { Book1Pipe } from 'src/BookPipe/book1.pipe';
import { BookService1 } from 'src/BookService/book1.service';

@Controller('book')
export class Book1Controller {
  constructor(private bookService1: BookService1) {}

  //AddBook
  @Post('/addBook')
  addBook(): string {
    return this.bookService1.addBook();
  }

  //DeleteBook
  @Delete('/deleteBook')
  deleteBook(): string {
    return this.bookService1.deleteBook();
  }

  //UpdateBook
  @Put('/updateBook')
  updateBook(): string {
    return this.bookService1.updateBook();
  }

  //FindAllBook
  @Get('/findAllBook')
  findAllBook(): string {
    return this.bookService1.findAllBook();
  }

  @Get('/findBookById/:bookId')
  @UsePipes(Book1Pipe)
  @UseFilters(BookExceptionFilter) //Note: with filter
  findBookById(@Param('bookId') bookId: number) {
    return this.bookService1.findBookById(bookId);
  }
}
