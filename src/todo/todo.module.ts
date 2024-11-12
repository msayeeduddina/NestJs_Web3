import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoContrlr } from './todo.controller';
import { TodoService } from './todo.service';
import { AppService } from 'src/app.service';
import { AuthenticationMiddleware } from 'src/authentication/authentication.middleware';

/**
 * The TodoModule class is a nest module that imports the TodoController and TodoService.
 * The configure method is used to add the AuthenticationMiddleware to the getTodo route.
 * @author [Your Name]
 */
@Module({
  /**
   * The controllers array contains the TodoContrlr class.
   */
  controllers: [TodoContrlr],
  /**
   * The providers array contains the TodoService and AppService classes.
   */
  providers: [TodoService, AppService],
})

export class TodoModule implements NestModule {
  /**
   * The configure method is used to add the AuthenticationMiddleware to the getTodo route.
   * @param consumer The MiddlewareConsumer instance.
   */
  configure(consumer: MiddlewareConsumer) {
    /**
     * The AuthenticationMiddleware is applied to the getTodo route.
     */
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes('todoController/getTodo');
  }
  
}