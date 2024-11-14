import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class BookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (value.id == 1) {
      return value;
    } else throw new BadRequestException('Invalid Id');
  }
}
