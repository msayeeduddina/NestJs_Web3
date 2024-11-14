import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Book1Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const protocol = req.protocol;
    const host = req.get('host');
    const url = req.originalUrl;
    const method = req.method;
    const time = new Date().toDateString();
    console.log(protocol + '://' + host + url + ' ' + method + ' ' + time);
    console.log('This is class based middleware implemented for Book1 Module');
    next();
  }
}
