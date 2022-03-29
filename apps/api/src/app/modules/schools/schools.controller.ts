import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSchoolDTO } from '../../DTOs/create-school.dto';
import { SchoolsService } from './schools.service';

@Controller()
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get('schools')
  getAllSchools() {
    return this.schoolsService.findAll();
  }

  @Post('schools/add')
  addSchool(@Body() createSchoolDto: CreateSchoolDTO) {
    return this.schoolsService.create(createSchoolDto);
  }
}
