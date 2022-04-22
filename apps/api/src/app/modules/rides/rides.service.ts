import { Injectable } from '@nestjs/common';
import { Prisma, Ride, User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class RidesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService
  ) {}

  // async createRide(driver_id: number, user_data: User) {
  //   //Fetch driver with driver ID
  //   const driverData = await this.prisma.driver.findUnique({
  //     where: {
  //       id: driver_id,
  //     },
  //   });

  //   return await this.prisma.ride.create({
  //     data: {
  //       driver_id: driver_id,
  //       host_name: user_data.first_name,
  //       phone_number: user_data.phone_number,
  //       email: user_data.email,
  //       date_of_ride:
  //     }
  //   })
  // }
  async createRide(driver_id: string): Promise<void | Ride>{
    
    const driverData = await this.prisma.driver.findUnique({
      where: {
        id: driver_id,
       },
    });

    const userData = await this.prisma.user.findUnique({
      where: {
        user_id: driverData.user_id,
       },
    });

    return  await this.prisma.ride.create({
        data: {
          driver: {
            connect: {
              id: driverData.id
            }  
          },
          host_name: userData.first_name,
          phone_number: userData.phone_number,
          email: userData.email,
          description: 'hihi',
          is_full: false,
          date_of_ride: 'idc',
          number_of_seats: 4,
          departure_location: 'my crib',
          school_location: userData.school_name,    
      },
        
    });
    
    
  }

  async findAll(): Promise<Ride[] | null> {
    return this.prisma.ride.findMany();
  }

  async findAvailableRidesForASchool(
    school_name: string
  ): Promise<Ride[] | null> {
    return await this.prisma.ride.findMany({
      where: {},
    });
  }

  findOne(id: number) {
    return `This action returns a ride`;
  }

  update() {
    return `This action updates a  ride`;
  }

  remove(id: number) {
    return `This action removes a #${id} ride`;
  }
}
