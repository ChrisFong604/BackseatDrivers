import { Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  @Get('login')
  @Post('login')
  async login(): Promise<any> {
    return {
      message: 'Login success',
    };
  }
}
