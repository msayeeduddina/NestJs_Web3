import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookDTO } from 'src/BookDTO/boot.dto';
import { BookService } from 'src/BookService/book.service';

@Controller('bookService')
export class BookServiceController {
  constructor(private bookService: BookService) {}

  //AddBookService
  @Post('/addBookService')
  addBookService(@Body() body: BookDTO): string {
    return this.bookService.addBookService(body);
  }

  //DeleteBookService
  @Delete('/deleteBookService/:bookServiceId')
  deleteBookService(@Param('bookServiceId') bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }

  //UpdateBookService
  @Put('/updateBookService')
  updateBookService(@Body() body: BookDTO): string {
    return this.bookService.updateBookService(body);
  }

  //FindAllBookService
  @Get('/findAllBookService')
  findAllBookService(): BookDTO[] {
    return this.bookService.findAllBookService();
  }

  @Get('/findBookServiceById/:bookServiceId')
  findBookServiceById(@Param('bookServiceId') bookId: string) {
    return this.bookService.findBookServiceById(bookId);
  }
}
