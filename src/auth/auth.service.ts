import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto, ForgetPasswordDto, ResetPasswordDto, SiginAuthDto, VerifyUserAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from "../user/user.service"
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { MailService } from 'src/mail/mail.service';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/user/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private mailService: MailService,
    private configService: ConfigService
  ) { }
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10)
  }
  randomNumber() {
    return Math.round(Math.random() * 10000);
  }
  async genrateToken(payload: object): Promise<string> {
    const key = this.configService.get("JWT_SECRET")
    return jwt.sign(payload, key, { expiresIn: "12m" })
  }
  async signup(createAuthDto: CreateAuthDto) {
    const findUser = await this.userService.findOne({ email: createAuthDto.email })

    if (findUser) {
      throw new BadRequestException("User already exist ")
    }
    const randomNumber = this.randomNumber()

    createAuthDto.password = await this.hashPassword(createAuthDto.password)
    const user = {
      ...createAuthDto,
      code: randomNumber
    }
    await this.mailService.sendEmail(createAuthDto.email, ` Verification `, `Code is ${randomNumber}`)
    const data = await this.userService.signup(user)
    const payload = {
      id: data.id,
      email: data.email,
      full_Name: data.full_Name
    }
    return {
      token: await this.genrateToken(payload),
      user: data
    }
  }
  async sigin(siginDto: SiginAuthDto) {
    const user = await this.userService.findOne({ email: siginDto.email });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    if (!user.isEmailVerified) {
      throw new BadRequestException('Verify your Account');
    }
    const isValidPassword = await bcrypt.compare(siginDto.password, user.password);
    if (!isValidPassword) {
      throw new BadRequestException('Wrong password');
    }
    const payload = {
      id: user.id,
      email: user.email,
      full_Name: user.full_Name
    }
    return {
      token: await this.genrateToken({ payload }),
      data: user
    }
  }
  async verifyUser(verify: VerifyUserAuthDto) {
    let user: User | null = await this.userService.findOne({ email: verify.email });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    if (user.code != verify.code) {
      throw new BadRequestException('Wrong Verification Code found');
    }
    user.isEmailVerified = true
    const UpdatedUser = await this.userService.updateUser(user)

    const payload = {
      id: user.id,
      email: user.email,
      full_Name: user.full_Name
    }
    return {
      token: await this.genrateToken({ payload }),
      data: UpdatedUser
      
    }
  }
  async forgorPassword(forgetPasswordDto:ForgetPasswordDto ) {
    let user: User | null = await this.userService.findOne({ email: forgetPasswordDto.email });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const randomNumber = this.randomNumber()
    user.code = randomNumber
    const UpdatedUser = await this.userService.updateUser(user)
    await this.mailService.sendEmail(forgetPasswordDto.email, ` Verification `, `Your Rest Password Code is ${randomNumber}`)
    return{
      message: 'Verification code sent to your email'
    }
  }
  async resetPassword(resetPasswordDto:ResetPasswordDto) {
    let user: User | null = await this.userService.findOne({ email: resetPasswordDto.email });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    if(resetPasswordDto.code!=user.code){
      throw new BadRequestException('Code is not valide');
    }
       user.password = await this.hashPassword(resetPasswordDto.password)

    const payload = {
      id: user.id,
      email: user.email,
      full_Name: user.full_Name
    }

    return {
      token: await this.genrateToken({ payload }),
      data: user
    }
    
    
   }

}
