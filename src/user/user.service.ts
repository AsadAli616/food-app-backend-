import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateUserDto, SiginDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';

import { MailService } from 'src/mail/mail.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async findOne(where: FindOptionsWhere<User>): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { ...where },
      relations: ['items', 'addresses'],
    });
  }
  async signup(createUserDto: CreateUserDto) {
    const insertUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(insertUser);
  }

  async updateUser(updateUser: Partial<User>) {
    return await this.userRepository.save(updateUser);
    // return this.userRepository.save(UpdateUser)
  }
}
