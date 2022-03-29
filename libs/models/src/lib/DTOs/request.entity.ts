import { User } from './user.entity';
import { Ride } from './ride.entity';

export class Request {
  request_id: string;
  passenger?: User;
  passenger_id: string;
  requester_location: string;
  requested_ride?: Ride;
  requested_ride_id: string;
  status: boolean;
}
