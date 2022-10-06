import { Injectable } from '@nestjs/common';
import { User } from './user.dto';
import { UserRepository } from './userLocal.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  CreateUser(user: User) {
    this.userRepository.insert(user);
    return true;
  }
  UpdateUser(id: string, Updated: User): boolean {
    return this.userRepository.update(id, Updated);
  }
  ReadUser(): Array<User> {
    return this.userRepository.find();
  }

  DeleteUser(id: string): boolean {
    return this.userRepository.delete(id);
  }
}
