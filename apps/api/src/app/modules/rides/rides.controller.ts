import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RidesService } from './rides.service';

@Controller('rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @Post()
  create() {
    return this.ridesService.create();
  }

  @Get()
  findAll() {
    return this.ridesService.findAll();
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
