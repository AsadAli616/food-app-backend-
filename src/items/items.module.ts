import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Item } from './entities/item.entity';

@Module({
   imports:[TypeOrmModule.forFeature([User,Item])],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports:[ItemsService]
})
export class ItemsModule {}
