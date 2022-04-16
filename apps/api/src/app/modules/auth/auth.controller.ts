import { Controller, Get, Post } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  loginJWT(@Request() req): any {
    return this.authService.login(req.user);
  }

  @Get('protected')
  getLoginRequest(@Request() req): string {
    return req.user;
  }
}
