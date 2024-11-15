import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';
import { PassportLocalStrategy } from './passport/passport.local.strategy';

@Module({
  imports: [UsersModule,PassportModule],
  controllers: [AppController],
  providers: [PassportLocalStrategy],
})
export class AppModule {}
