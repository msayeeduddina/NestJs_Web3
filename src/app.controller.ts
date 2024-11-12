import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  /**
   * The constructor for the AppController class.
   * @param appService The AppService instance.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * The getHello() method is a Nest route handler that returns a JSON object with a "name" property.
   * @returns A JSON object with a "name" property.
   */
  @Get()
  getHello() {
    return this.appService.getHello();
  }

  /**
   * The loginFunc() method is a Nest route handler that returns a JSON object with a "name" property.
   * @returns A JSON object with a "name" property.
   */
  @Get('/login')
  loginFunc() {
    return { name: '<h1>login</h1>' };
  }

}