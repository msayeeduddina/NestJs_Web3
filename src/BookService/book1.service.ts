import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService1 {
  addBook(): string {
    return 'Add Book';
  }

  deleteBook(): string {
    return 'Delete Book';
  }

  updateBook(): string {
    return 'Update Book';
  }

  findAllBook(): string {
    return 'Find All Book';
  }
  findBookById(bookId: number): string {
    return `Find Book By Id: ${bookId}`;
  }
}
