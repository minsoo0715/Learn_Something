import { User } from './user.dto';

export class UserRepository {
  Users: Array<User>;
  constructor() {
    this.Users = [];
  }
  insert(user: User) {
    this.Users.push(user);
  }
  find() {
    return this.Users;
  }
  findOne(id: string) {
    return this.Users.find((element) => element.id == id);
  }

  update(id: string, Updated: User) {
    const index: number = this.Users.findIndex((element) => element.id == id);
    if (index == -1) return false;
    else {
      this.Users[index] = Updated;
      return true;
    }
  }

  delete(id: string) {
    const index: number = this.Users.findIndex((element) => element.id == id);
    if (index == -1) return false;
    else {
      this.Users.splice(index, 1);
      return true;
    }
  }
}
