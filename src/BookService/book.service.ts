import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/BookDTO/boot.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: BookDTO[] = [];

  addBookService(book: BookDTO): string {
    book.id = uuidv4();
    this.books.push(book);
    return 'Book have been added';
  }

  deleteBookService(bookId: string): string {
    this.books = this.books.filter((currBook) => {
      return currBook.id != bookId;
    });
    return `Book ${bookId}have been deleted`;
  }

  updateBookService(book: BookDTO): string {
    const bookIndex = this.books.findIndex((currBook) => {
      return currBook.id == book.id;
    });
    this.books[bookIndex] = book;
    return 'Book have been updated';
  }

  findAllBookService(): BookDTO[] {
    return this.books;
  }

  findBookServiceById(bookId: string): BookDTO {
    const bookIndex = this.books.findIndex((currIndex) => {
      return currIndex.id == bookId;
    });
    return this.books[bookIndex];
  }
}
