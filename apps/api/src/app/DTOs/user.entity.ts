import { School } from './school.entity';
import { Request } from './request.entity';
import { Driver } from './driver.entity';

export class User {
  id: string;
  school?: School;
  school_name: string;
  first_name: string;
  last_name: string;
  email: string;
  address: string | null;
  phone_number: string | null;
  Request?: Request[];
  Driver?: Driver | null;
}
