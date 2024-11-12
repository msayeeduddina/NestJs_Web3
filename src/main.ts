import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/**
 * The main entry point of the application.
 * This function initializes the NestJS application and sets up global configurations.
 */
async function bootstrap() {
  // Create a NestJS application instance using the AppModule.
  const app = await NestFactory.create(AppModule);

  // Apply global validation pipe for request validation.
  app.useGlobalPipes(new ValidationPipe());

  // Start the application and listen on the specified port or default to port 3000.
  await app.listen(process.env.PORT ?? 3000);
}

// Execute the bootstrap function to start the application.
bootstrap();