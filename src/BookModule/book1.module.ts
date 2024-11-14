import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Book1Middleware } from 'src/BookMiddleware/book1.middleware';
import { BookService1 } from 'src/BookService/book1.service';

@Module({
  imports: [],
  controllers: [],
  providers: [BookService1],
})
export class Book1Module implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Book1Middleware).forRoutes('book');
  }
}
