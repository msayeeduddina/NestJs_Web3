import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { RootModule } from './root.module';
import { Request, Response, NextFunction } from 'express';

function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log('this is globalMiddleWareOne');
  next();
}

function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('this is globalMiddleWareTwo');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleWareOne, globalMiddleWareTwo);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
