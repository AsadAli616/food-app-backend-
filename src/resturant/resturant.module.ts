import { Module } from '@nestjs/common';
import { ResturantService } from './resturant.service';
import { ResturantController } from './resturant.controller';
import { ItemsService } from 'src/items/items.service';
import { User } from 'src/user/entities/user.entity';
import { Item } from 'src/items/entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([User,Item])],
  controllers: [ResturantController],
  providers: [ResturantService,ItemsService],
})
export class ResturantModule {}
