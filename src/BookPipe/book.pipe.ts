import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BookDTO } from 'src/BookDTO/boot.dto';

@Injectable()
export class BookPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const Book1PipeClass = plainToInstance(BookDTO, value);
    const Book1PipeClassError = await validate(Book1PipeClass);
    if (Book1PipeClassError.length > 0) {
      throw new BadRequestException(
        'Validation failed' + JSON.stringify(Book1PipeClassError),
      );
    }
    return value;
  }
}
