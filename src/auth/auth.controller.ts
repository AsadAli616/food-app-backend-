import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto, SiginAuthDto } from './dto/create-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,

  ) {}

  @Post("sigup")
  async signup(@Body() signupDto: CreateAuthDto) {
    
    return this.authService.signup(signupDto);
  }

  @Post('sigin')
  async sigin(@Body() signupDto:SiginAuthDto ){
    return this.authService.sigin(signupDto);
  }

}

