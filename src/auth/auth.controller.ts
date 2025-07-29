import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto, ForgetPasswordDto, ResetPasswordDto, SiginAuthDto, VerifyUserAuthDto } from './dto/create-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,

  ) {}

  @Post("signup")
  async signup(@Body() signupDto: CreateAuthDto) {
    return this.authService.signup(signupDto);
  }

  @Post('signin')
  async sigin(@Body() signupDto:SiginAuthDto ){
    return this.authService.sigin(signupDto);
  }
  @Post('verify-email')
  async verify(@Body() verifyUser:VerifyUserAuthDto ){
    return this.authService.verifyUser(verifyUser);
  }
  @Post('forgot-password')
  async forgotPassword(@Body() forgetPasswordDto:ForgetPasswordDto ){
    return this.authService.forgorPassword(forgetPasswordDto);
  }
   @Post('reset-password')
  async resetPassword(@Body() resetPassword:ResetPasswordDto ){
    return this.authService.resetPassword(resetPassword);
  }
  
  @Post("signup-resturant")
  async signupResturant(@Body() signupDto: CreateAuthDto) {
    return this.authService.sigupResturant(signupDto);
  }
  @Post("signup-rider")
  async signupRider(@Body() signupDto: CreateAuthDto) { 
    return this.authService.signupRider(signupDto);
  }
}

