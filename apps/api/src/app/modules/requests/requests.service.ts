import { ForbiddenException, Injectable } from '@nestjs/common';
import { Request } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(passenger_id: string, ride_id: string, req: Request): Promise<Request> {
    
    const passenger = await this.prisma.user.findUnique({
      where: {
        user_id: passenger_id,
      }
    })

    const ride = await this.prisma.ride.findUnique({
      where: {
        ride_id: ride_id,
      }
    })

    return await this.prisma.request.create({
      data: {
        passenger_id: passenger.user_id,
        requested_ride_id: ride.ride_id,
        requester_location: req.requester_location,
        status: false,
      }
    });
  }

  async findAllRequestsForRide(ride_id: string): Promise<Request[]> {
    return await this.prisma.request.findMany({
      where: {
        requested_ride_id: ride_id,
      },
    });
  }

  async findAllRequestsForUser(user_id: string): Promise<Request[]> {
    return await this.prisma.request.findMany({
      where: {
        passenger_id: user_id,
      },
    });
  }

  async findRequestById(request_id: string) {
    return await this.prisma.request.findUnique({
      where: {
        request_id: request_id,
      },
    });
  }

  async updateRequest(request_id: string, location: string) {
    
    const request = await this.prisma.request.findUnique({
      where: {
        request_id: request_id,
      }
    })
    
    if (request.status) {
      throw new ForbiddenException('Cannot change location because the request is already accepted by the driver',);
    }

    return await this.prisma.request.update({
      where: {
        request_id: request_id,
      },
      data: {
        requester_location: location,
      }
    });
  }

  async removeRequest(request_id: string) {
    return await this.prisma.request.delete({
      where: {
        request_id: request_id,
      },
    });
  }

  async acceptRequest(request_id: string) {
    return await this.prisma.request.update({
      where: {
        request_id: request_id,
      },
      data: {
        status: true,
      }
    });
  }
}
