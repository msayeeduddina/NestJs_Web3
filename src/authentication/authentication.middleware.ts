import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  
  /**
   * use
   *
   * This is the function that will be called when the middleware is executed.
   * It will be passed the request, response and next middleware.
   *
   * @param {Request} req
   * @param {*} res
   * @param {() => void} next
   * @memberof AuthenticationMiddleware
   */
  use(req: Request, res: any, next: () => void) {
    console.log('Im here', req?.path);
    next();
  }

}