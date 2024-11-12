import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTodo {
  @IsNotEmpty({message: 'name is required'})
  name: string;

  @IsEmail()
  @IsNotEmpty({message: 'email is required'})
  email: string;
}

export class UpdateTodos {
  @IsNotEmpty({message: 'title is required'})
  title: string;

}