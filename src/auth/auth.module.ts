import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from 'src/passport/passport.local.strategy';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [UsersService],
  controllers: [],
  providers: [PassportLocalStrategy],
})
export class AuthModule {}
