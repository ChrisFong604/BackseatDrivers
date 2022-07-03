import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Request } from '@prisma/client';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post('create/:passenger_id/:ride_id')
  create(@Param('passenger_id') passenger_id: string, @Param('ride_id') ride_id: string, @Body() req: Request) {
    return this.requestsService.create(passenger_id, ride_id, req);
  }

  @Get(':ride_id')
  getAllRequestsForRide(@Param('ride_id') ride_id: string) {
    return this.requestsService.findAllRequestsForRide(ride_id);
  }

  @Get(':user_id')
  getAllRequestsForUser(@Param('user_id') user_id: string) {
    return this.requestsService.findAllRequestsForUser(user_id);
  }

  @Get(':request_id')
  findOne(@Param('request_id') request_id: string) {
    return this.requestsService.findRequestById(request_id);
  }

  @Patch('update/:request_id/:location')
  update(@Param('request_id') request_id: string, @Param('location') location: string) {
    return this.requestsService.updateRequest(request_id, location);
  }

  @Delete(':request_id')
  remove(@Param('request_id') request_id: string) {
    return this.requestsService.removeRequest(request_id);
  }

  @Patch(':request_id/accepted')
  accept(@Param('request_id') request_id: string) {
    return this.requestsService.acceptRequest(request_id);
  }
}
