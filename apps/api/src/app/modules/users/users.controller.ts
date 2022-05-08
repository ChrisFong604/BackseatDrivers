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
    return this.usersService.findAllUsersInASchool(school_name);
  }

  @Get('user/:id')
  getUserData(@Param('id') id: string) {
    return this.usersService.findUserById(id);
  }

  @Patch('user/:id')
  updateUser(@Param('id') id: string, @Body() user: Prisma.UserUpdateInput) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
