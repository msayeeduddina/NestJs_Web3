import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('app')
export class AppController {
  constructor() {}

  @Get('/getData')
  @UseGuards(AuthGuard('local'))
  getData(@Request() req): string {
    return req.user;
  }
}
