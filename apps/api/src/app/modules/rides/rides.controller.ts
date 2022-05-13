import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { Ride } from '@prisma/client';
import { RidesService } from './rides.service';

@Controller('rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @Post('ride/:driver_id')
   create(@Param('driver_id') driver_id: string, @Body() ride: Ride) {
     return this.ridesService.createRide(driver_id, ride);
  }

  @Get()
  findAll() {
    return this.ridesService.findAll();
  }

  @Get(':school')
  findRidesForSchool(@Param('school') schoolName: string){
    return this.ridesService.findAllRidesSchool(schoolName);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ridesService.findOne(+id);
  }

  
  @Patch(':id')
  update() {
    return this.ridesService.update();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ridesService.remove(+id);
  }
}
