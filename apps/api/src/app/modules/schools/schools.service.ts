import { Injectable } from '@nestjs/common';
import { School } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SchoolsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: School) {
    return await this.prisma.school.create({
      data,
    });
    // await this.prisma.schools.create({

    // })
  }

  async findAll() {
    return await this.prisma.school.findMany();
  }
}
