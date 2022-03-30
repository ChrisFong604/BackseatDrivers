import { Injectable } from '@nestjs/common';
import { Prisma, School } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SchoolsService {
  constructor(private readonly prisma: PrismaService) {}

  async createSchool(data: Prisma.SchoolCreateInput): Promise<School> {
    return await this.prisma.school.create({
      data,
    });
  }

  async findSchool(school_name: string): Promise<School> {
    return await this.prisma.school.findUnique({
      where: {
        school_name: school_name,
      },
    });
  }

  async findAll() {
    return await this.prisma.school.findMany();
  }
}
