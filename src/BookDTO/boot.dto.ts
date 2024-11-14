import { IsString } from 'class-validator';

export class BookDTO {
  // @IsString()
  id: string;
  @IsString()
  title: string;
  @IsString()
  author: string;
  @IsString()
  published: string;
}
