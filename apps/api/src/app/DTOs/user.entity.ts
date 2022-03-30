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
  phone_number: string;
  Request?: Request[];
  Driver?: Driver | null;
}
