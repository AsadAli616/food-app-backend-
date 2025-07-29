import { Module  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm.config';
import { ItemsModule } from './items/items.module';
import { ResturantModule } from './resturant/resturant.module';
import { AddressModule } from './address/address.module';


@Module({
  imports: [
      ConfigModule.forRoot({
      isGlobal: true, // makes ConfigService available globally
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),
    UserModule, AuthModule, ItemsModule, ResturantModule, AddressModule,  
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
