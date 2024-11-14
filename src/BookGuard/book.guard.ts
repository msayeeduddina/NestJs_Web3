import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class BookGuard implements CanActivate {
  private key: string = 'dfsgkdfklgmdf';
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    if (request.header('key') == undefined) return false;
    return request.header('key') == this.key;
  }
}
