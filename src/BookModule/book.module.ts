import { Module } from '@nestjs/common';
import { BookService } from 'src/BookService/book.service';

@Module({
  imports: [],
  controllers: [],
  providers: [BookService],
})
export class BookModule {}
