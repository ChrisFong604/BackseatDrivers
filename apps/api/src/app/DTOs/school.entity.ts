import { User } from './user.entity';

export class School {
  school_name: string;
  school_acronym: string;
  school_location: string;
  users?: User[];
}
