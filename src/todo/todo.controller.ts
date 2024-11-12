import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CreateTodo, UpdateTodos } from './todo.dto';

@Controller('todoController')
export class TodoContrlr {
  private todos = [];
  constructor(private appservice: AppService) {}
  @Post('/postTodo')
  postTodo(@Body() data: CreateTodo) {
    const item = {
      id: new Date().getTime(),
      title: 'abcdTitle',
      ...data,
      createdAt: new Date().toLocaleString(),
      isComplete: false,
    };
    this.todos.push(item);
    return {
      msg: 'postTodos is created',
    };
  }

  @Get('/getTodosArray/')
  getAlTodos() {
    return {
      todos: this.todos,
      msg: 'todos are fetched',
    };
  }

  @Get('/getTodo')
  getTodo() {
    return this.appservice.getHello();
  }
  @Put('/updateTodo/:id')
  updateTodos(@Param('id') id: number, @Body() data: UpdateTodos) {
    const newtodos = this.todos.map((cur, i) => {
      if (cur.id == id) {
        return {
          ...cur,
          ['title']: data.title,
          isComplete: true,
        };
      }
      return cur;
    });
    this.todos = newtodos;
    return {
      msg: 'todos is updated',
    };
  }

  @Delete('/deleteTodo/:id')
  deleteTodosId(@Param('id') id: number) {
    const newtodos = this.todos.filter((cur) => cur.id != id);
    this.todos = newtodos;
    return {
      msg: 'todos is deleted',
    };
  }
}
