import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { MailService } from 'src/mail/mail.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.registerAsync({
  inject: [ConfigService],
  global: true,
  useFactory: (configService: ConfigService) => ({
    secret: configService.get('JWT_SECRET'),
    signOptions: { expiresIn: '12m' },
  }),
})],
  controllers: [AuthController],
  providers: [AuthService,UserService,MailService,JwtService],
})
export class AuthModule {}
