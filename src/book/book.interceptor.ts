import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class BookAddValueFromInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.age = 22;
    return next.handle();
  }
}

@Injectable()
export class BookModifyResponseFromInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.age = 22;
    return next.handle().pipe(
      map((data) => {
        data = 'This is response from book1 interceptor for addModifyResponseFrominterceptor';
        return data;
      }),
    );
  }
}
