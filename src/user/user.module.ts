import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MailService } from 'src/mail/mail.service';
import { Item } from 'src/items/entities/item.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Item])],
  controllers: [UserController],
  providers: [UserService,MailService],
})
export class UserModule {}
