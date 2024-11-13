import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from 'src/BookService/book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  //AddBook
  @Post('/addBook')
  addBook(): string {
    return this.bookService.addBook();
  }

  //DeleteBook
  @Post('/deleteBook')
  deleteBook(): string {
    return this.bookService.deleteBook();
  }

  //UpdateBook
  @Put('/updateBook')
  updateBook(): string {
    return this.bookService.updateBook();
  }

  //FindAllBook
  @Get('/findAllBook')
  findAllBook(): string {
    return this.bookService.findAllBook();
  }

  @Get('/findBookById/:bookId')
  findBookById(@Param('bookId') bookId: number) {
    return this.bookService.findBookById(bookId);
  }
}
