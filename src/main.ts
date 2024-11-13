import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
