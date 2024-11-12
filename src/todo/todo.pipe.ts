import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

/**
 * A pipe that adds a "fromPipe" string to the id property of the received value.
 */
@Injectable()
export class TodoPipe implements PipeTransform {
  
  /**
   * Transforms the received value by adding a "fromPipe" string to the id property.
   * @param value the value to transform
   * @param metadata the metadata of the value
   * @returns the transformed value
   */
  transform(value: any, metadata: ArgumentMetadata) {
    value.id = value.id + 'fromPipe';
    return value;
  }

}