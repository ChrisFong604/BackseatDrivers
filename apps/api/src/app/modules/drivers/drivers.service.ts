import { Injectable } from '@nestjs/common';

@Injectable()
export class DriversService {
  create() {
    return 'This action adds a new driver';
  }

  findAll() {
    return `This action returns all drivers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driver`;
  }

  update(id: number) {
    return `This action updates a #${id} driver`;
  }

  remove(id: number) {
    return `This action removes a #${id} driver`;
  }
}
