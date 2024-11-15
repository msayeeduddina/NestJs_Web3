import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  public users: User[] = [
    {
      userName: 'User1',
      password: 'admin',
      email: 'User1@gmail.com',
    },
    {
      userName: 'User2',
      password: 'admin',
      email: 'User2@gmail.com',
    },
    {
      userName: 'User3',
      password: 'admin',
      email: 'User3@gmail.com',
    },
  ];

  getUserByName(userByName: string): User {
    return this.users.find((user: User) => user.userName == userByName);
  }
}
