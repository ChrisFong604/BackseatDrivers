import { Request } from './request.entity';
import { Driver } from './driver.entity';

export class Ride {
  ride_id: string;
  passenger_requests?: Request[];
  driver?: Driver;
  driver_id: string;
  host_name: string;
  phone_number: string;
  email: string;
  description: string;
  is_full: boolean;
  date_of_ride: string;
  number_of_seats: number;
  departure_location: string;
  school_location: string;
}
