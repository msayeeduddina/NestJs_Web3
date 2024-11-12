import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CreateTodo, UpdateTodos } from './todo.dto';
import { TodoPipe } from './todo.pipe';

@Controller('todoController')
export class TodoContrlr {
  /**
   * This is the list of all the todo items
   */

  private todos = [];
  /**
   * This is the constructor for the controller
   * It injects the AppService
   * @param appservice The AppService
   */
  constructor(private appservice: AppService) {}

  /**
   * This is the post method for creating a new todo item
   * @param data The data for the new todo item
   * @returns The new todo item
   */
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

  /**
   * This is the get method for retrieving all the todo items
   * @returns All the todo items
   */
  @Get('/getTodosArray')
  getAlTodos() {
    return {
      todos: this.todos,
      msg: 'todos are fetched',
    };
  }

  /**
   * This is the get method for retrieving a single todo item
   * @returns A single todo item
   */
  @Get('/getTodo')
  getTodo() {
    return this.appservice.getHello();
  }

  /**
   * This is the put method for updating a single todo item
   * @param id The id of the todo item to update
   * @param data The data for the updated todo item
   * @returns The updated todo item
   */
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

  /**
   * This is the delete method for deleting a single todo item
   * @param id The id of the todo item to delete
   * @returns The deleted todo item
   */
  @Delete('/deleteTodo/:id')
  deleteTodosId(@Param('id') id: number) {
    const newtodos = this.todos.filter((cur) => cur.id != id);
    this.todos = newtodos;
    return {
      msg: 'todos is deleted',
    };
  }

  /**
   * This is the get method for retrieving the id and slug of the current user
   * @param data The id and slug of the current user
   * @returns The id and slug of the current user
   */
  @Get('/getUserIdPipe/:id/:slug')
  @UsePipes(TodoPipe)
  getUserIdPipe(@Param() data) {
    return data;
  }

  /**
   * This is the get method for retrieving the id and slug of the current user and the search query
   * @param data The id and slug of the current user
   * @param sea The search query
   * @returns The id and slug of the current user and the search query
   */
  @Get('/getUserIdSearch/:id/:slug')
  getUserIdSearch(@Param() data, @Query('search') sea: string) {
    return { data: JSON.stringify(data), sea };
  }
  
}