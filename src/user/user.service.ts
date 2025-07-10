import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}
async signup(createUserDto: CreateUserDto) {
  createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
  const user = this.userRepository.create(createUserDto)
  return this.userRepository.save(user)}
}
