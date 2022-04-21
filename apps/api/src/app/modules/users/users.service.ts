import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

import { scryptSync, randomBytes, createHash } from 'crypto';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: User): Promise<User> {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(data.password, salt, 64).toString('hex');

    return await this.prisma.user.create({
      data: {
        password: `${salt}:${hashedPassword}`,
        ...data,
      },
    });
  }

  async findAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany({});
  }

  async findAllUsersInASchool(school_name: string): Promise<User[]> {
    return await this.prisma.user.findMany({
      where: {
        school_name: school_name,
      },
    });
  }

  async findUserById(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        user_id: id,
      },
    });
  }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    return; /* await this.prisma.user.update({
      data,
      where: {
        id: id,
      },
    }); */
  }

  async deleteUser(id: string) {
    return; /* await this.prisma.user.delete({
      where: {
        id: id,
      },
    }); */
  }
}
