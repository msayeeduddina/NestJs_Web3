import { Module } from '@nestjs/common';
import { UserModule } from './UserModule/user.module';
import { OrderModule } from './OrderModule/order.module';
import { ChatModule } from './ChatModule/chat.module';
import { BookServiceController } from './BookController/book.controller';
import { Book1Controller } from './BookController/book1.controller';
import { BookService } from './BookService/book.service';
import { BookService1 } from './BookService/book1.service';
import { BookModule } from './BookModule/book.module';
import { UsersModule } from './users/users.module';
import { Book1Module } from './BookModule/book1.module';

@Module({
  imports: [
    UserModule,
    OrderModule,
    ChatModule,
    BookModule,
    Book1Module,
    UsersModule,
  ],
  controllers: [BookServiceController, Book1Controller],
  providers: [BookService, BookService1],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
