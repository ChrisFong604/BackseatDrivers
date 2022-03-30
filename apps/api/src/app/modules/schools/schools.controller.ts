import { Body, Controller, Get, Post } from '@nestjs/common';
import { School } from '@prisma/client';
import { SchoolsService } from './schools.service';

@Controller()
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get('schools')
  getAllSchools() {
    return this.schoolsService.findAll();
  }

  @Post('schools/add')
  addSchool(@Body() school: School) {
    return this.schoolsService.createSchool(school);
  }
}
