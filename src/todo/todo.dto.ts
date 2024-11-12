import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTodo {
  /**
   * The name of the Todo.
   * This is a required field.
   */
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  /**
   * The email of the Todo.
   * This is a required field.
   */
  @IsEmail()
  @IsNotEmpty({ message: 'email is required' })
  email: string;
}

/**
 * The data transfer object for updating an existing Todo.
 * This is used by the validation pipe to ensure that the incoming data
 * conforms to the expected structure.
 */
export class UpdateTodos {
  /**
   * The title of the Todo.
   * This is a required field.
   */
  @IsNotEmpty({ message: 'title is required' })
  title: string;
}