import { HttpException, HttpStatus } from '@nestjs/common';

export class BookException extends HttpException {
  constructor() {
    super('This is custom Exception Handling', HttpStatus.BAD_REQUEST);
  }
}
