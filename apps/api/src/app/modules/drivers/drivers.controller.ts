import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { DriversService } from './drivers.service';

@Controller()
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post('driver/create/:id')
  create(@Param('id') id: string) {
    return this.driversService.createDriver(id);
  }

  @Get('drivers')
  findAll() {
    return this.driversService.findAll();
  }

  @Get('driver/:id')
  findOne(@Param('id') id: string) {
    return this.driversService.findDriver(id);
  }

  @Delete('driver/delete/:id')
  deleteDriver(@Param('id') id: string) {
    return this.driversService.deleteDriver(id);
  }
}
