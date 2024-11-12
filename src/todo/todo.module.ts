import { Module } from '@nestjs/common';
import { TodoContrlr } from './todo.controller';
import { TodoService } from './todo.service';
import { AppService } from 'src/app.service';

@Module({
  controllers: [TodoContrlr],
  providers: [TodoService, AppService],
})
export class TodoModule {}
