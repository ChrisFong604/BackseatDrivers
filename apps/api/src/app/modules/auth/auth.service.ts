import { Injectable, Res } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { scryptSync, timingSafeEqual } from 'crypto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(user: any) {
    const payload = { email: user.email, sub: user.user_id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);

    const [salt, hashKey] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(hashKey, 'hex');
    const passwordMatch = timingSafeEqual(hashedBuffer, keyBuffer);

    if (user && passwordMatch) {
      const { password, ...rest } = user;
      return rest;
    }
  }
}
