import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {UserService} from "../user/user.service"
import { CreateUserDto } from 'src/user/dto/create-user.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService
  ){}
 async signup(createAuthDto:CreateUserDto) {
    return this.userService.signup(createAuthDto)
  }

 
}
