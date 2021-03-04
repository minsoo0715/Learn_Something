import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './users.entitiy';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() user: User) {
    await this.usersService.insert(user);
  }

  @Get('getuser')
  async getuser(@Param() params) {
    return await this.usersService.findOne(params.id);
  }

  @Get('getAlluser')
  async getAlluser() {
    return await this.usersService.findAll();
  }
}
