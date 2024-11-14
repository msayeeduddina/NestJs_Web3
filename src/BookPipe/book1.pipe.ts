import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class Book1Pipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (value == 1) {
      return value;
    } else throw new BadRequestException('Invalid Id');
  }
}
