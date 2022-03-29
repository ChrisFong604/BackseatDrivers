import { Injectable } from '@nestjs/common';

@Injectable()
export class RidesService {
  create() {
    return 'This action adds a new ride';
  }

  findAll() {
    return `This action returns all rides`;
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
