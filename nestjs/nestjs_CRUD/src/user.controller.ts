import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('User')
  async GetUser() {
    return this.userService.ReadUser();
  }
  @Post('User')
  async AddUser(@Body() Userdata: User) {
    const chk: boolean = this.userService.CreateUser(Userdata);
    if (chk) return 'changed';
    else return 'else';
  }
  @Put('User/:id')
  async EditUser(@Body() userdata: User, @Param() params) {
    const chk: boolean = this.userService.UpdateUser(params.id, userdata);
    if (chk) return 'changed';
    else return 'else';
  }
  @Delete('User/:id')
  async DestroyUser(@Param() params) {
    const chk: boolean = this.userService.DeleteUser(params.id);
    if (chk) return 'changed';
    else return 'else';
  }
}
