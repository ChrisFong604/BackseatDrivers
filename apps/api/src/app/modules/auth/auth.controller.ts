import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-Auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginJWT(
    @Req() request,
    @Res({ passthrough: true }) response: Response
  ): Promise<any> {
    const { token } = await this.authService.login(request.user);
    response.cookie('token', token, {
      httpOnly: false,
      sameSite: false,
      domain: 'http://localhost:4200',
      maxAge: 86400,
    });

    response.json({ token });
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getLoginRequest(@Req() req): string {
    return req.user;
  }
}
