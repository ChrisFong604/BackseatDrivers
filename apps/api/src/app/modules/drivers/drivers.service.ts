import { Injectable } from '@nestjs/common';
import { Driver } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) {}

  async createDriver(user_id: string) {
    return; /* await this.prisma.driver.create({
      data: {
        driver: {
          connect: {
            id: user_id,
          },
        },
      },
    }); */
  }

  async findAll(): Promise<Driver[] | null> {
    return await this.prisma.driver.findMany({});
  }

  async findDriver(id: string): Promise<Driver | null> {
    return; /* await this.prisma.driver.findUnique({
      where: {
        driver_id: id,
      },
    }); */
  }

  async deleteDriver(user_id: string) {
    return; /* await this.prisma.driver.delete({
      where: {
        driver_id: user_id,
      },
    }); */
  }
}
