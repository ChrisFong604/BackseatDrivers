import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user/create')
  create(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Get('users')
  getAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get('users/:school')
  getAllUsersFromASchool(@Param('school') school_name: string) {
    return this.usersService.findAllStudentsInASchool(school_name);
  }

  @Get('user/:id')
  getUser(@Param('id') id: string) {
    return this.usersService.findUser(id);
  }

  @Patch('user/:id')
  updateUser(@Param('id') id: string, @Body() user: Prisma.UserUpdateInput) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}
