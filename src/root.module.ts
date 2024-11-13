import { Module } from '@nestjs/common';
import { UserModule } from './UserModule/user.module';
import { OrderModule } from './OrderModule/order.module';
import { ChatModule } from './ChatModule/chat.module';
import { BookController } from './BookController/book.controller';
import { BookService } from './BookService/book.service';

@Module({
  imports: [UserModule, OrderModule, ChatModule],
  controllers: [BookController],
  providers: [BookService],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
