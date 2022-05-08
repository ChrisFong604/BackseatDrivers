import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

import { scryptSync, randomBytes, createHash } from 'crypto';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: User): Promise<User> {
    const salt = await randomBytes(16).toString('hex');
    const hashedPassword = await scryptSync(data.password, salt, 64).toString(
      'hex'
    );

    const saltedHash = `${salt}:${hashedPassword}`;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = data;

    return await this.prisma.user.create({
      data: {
        password: saltedHash,
        ...rest,
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

  async findUserById(user_id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
      select: {
        school_name: true,
        first_name: true,
        last_name: true,
        phone_number: true,
      },
    });
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async updateUser(user_id: string, data: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      data,
      where: {
        user_id: user_id,
      },
    });
  }

  async deleteUser(user_id: string) {
    return await this.prisma.user.delete({
      where: {
        user_id: user_id,
      },
    });
  }
}
