import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { BookException } from 'src/BookException/book.exception';

@Injectable()
export class Book1Pipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (value == 1) {
      return value;
    } else {
      // throw new BookException(); //Note: without filter
      throw new BadRequestException();
    }
  }
}
