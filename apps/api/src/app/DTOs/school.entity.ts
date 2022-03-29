import { User } from './user.entity';

export class School {
  school_name: string;
  school_location: string;
  users?: User[];
}
