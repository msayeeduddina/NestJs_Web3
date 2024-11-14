import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import {
  BookAddValueFromInterceptor,
  BookModifyResponseFromInterceptor,
} from 'src/book/book.interceptor';
import { BookExceptionFilter } from 'src/BookException/book.exception.filter';
import { BookGuard } from 'src/BookGuard/book.guard';
import { Book1Pipe } from 'src/BookPipe/book1.pipe';
import { BookService1 } from 'src/BookService/book1.service';
import { Request, Response } from 'express';

@Controller('book')
// @UseGuards(BookGuard) //Note: for guard for all methods within this controller
export class Book1Controller {
  constructor(private bookService1: BookService1) {}

  //AddBook
  @Post('/addBook')
  addBook(): string {
    return this.bookService1.addBook();
  }

  @Post('/addBookAddValueFromInterceptor')
  @UseInterceptors(BookAddValueFromInterceptor)
  addBookAddValueFromInterceptor(@Req() req: Request, @Res() res: Response): any {
    return res.json(req.body);
  }

  @Post('/addModifyResponseFromInterceptor')
  @UseInterceptors(BookModifyResponseFromInterceptor)
  addModifyResponseFromInterceptor(): any {
    return 'This is response from book1 controller for addModifyResponseFromcontroller';
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
  @UseGuards(BookGuard)
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
