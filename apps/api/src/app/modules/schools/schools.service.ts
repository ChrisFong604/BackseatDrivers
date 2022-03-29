import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SchoolsService {
  constructor(private readonly prisma: PrismaService) {}
  async returnString() {
    return 'This is the schools endpoint';
  }

  PrismaSer;

  async dumbQuery() {
    return 'not working yet';
  }

  async addSchool() {
    return await this.prisma.school.create({
      data: {
        school_name: 'Simon Fraser University',
        school_location: 'Burnaby mountain',
      },
    });
    // await this.prisma.schools.create({

    // })
  }
}
