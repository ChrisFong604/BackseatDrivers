import { User } from './user.entity';
import { Ride } from './ride.entity';

export class Driver {
  id: number;
  driver?: User;
  driver_id: string;
  Ride?: Ride[];
}
