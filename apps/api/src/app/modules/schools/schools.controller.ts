import { Controller, Get, Post } from '@nestjs/common';
import { SchoolsService } from './schools.service';

const dumb = {
  school_name: 'Simon Fraser University',
  school_location: 'Burnaby mountain',
};

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get()
  returnString() {
    return this.schoolsService.returnString();
  }
  @Get('/test')
  testEndpoint() {
    return this.schoolsService.dumbQuery();
  }

  @Post('/add')
  addSchool() {
    return this.schoolsService.addSchool();
  }
}
