import { Injectable } from '@nestjs/common';
import { Driver } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) {}

  async createDriverFromID(user_id: string): Promise<Driver> {
    return  await this.prisma.driver.create({
      data: {
        driver: {
          connect: {
            user_id: user_id,
          },
        },
      },
    });
  }
  
  async createDriverFromEmail(email:string): Promise<void | Driver>{
    const driver = await this.prisma.user
    .findUnique({
      where: { email: email },
      select: {
        user_id: true,
      },
    })
    
    return  await this.prisma.driver.create({
        data: {
          driver: {
            connect: {
              user_id: driver.user_id,
            },
          },
        },
      });
    
    
  }
  async findAll(): Promise<Driver[] | null> {
    return await this.prisma.driver.findMany({});
  }

  async findDriver(id: string): Promise<Driver | null> {
    return await this.prisma.driver.findUnique({
      where: {
        user_id: id,
      },
    }); 
  }
  
  async deleteDriver(user_id: string) {
    return  await this.prisma.driver.delete({
      where: {
        user_id: user_id,
      },
    }); 
  }
}
