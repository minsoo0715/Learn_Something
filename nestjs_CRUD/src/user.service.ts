import { Injectable } from '@nestjs/common';
import { User } from './user.dto';

@Injectable()
export class UserService {
  Users: Array<User>;
  constructor() {
    this.Users = [];
  }
  CreateUser(user: User) {
    this.Users.push(user);
    return true;
  }
  UpdateUser(id: string, Updated: User): boolean {
    const index: number = this.Users.findIndex((element) => (element.id = id));
    if (index == -1) return false;
    else {
      this.Users[index] = Updated;
      return true;
    }
  }
  ReadUser(): Array<User> {
    return this.Users;
  }

  DeleteUser(id: string): boolean {
    const index: number = this.Users.findIndex((element) => (element.id = id));
    if (index == -1) return false;
    else {
      this.Users.splice(index, 1);
      return true;
    }
  }
}
