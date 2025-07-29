import { Module } from '@nestjs/common';
import { OrderOfProductService } from './order-of-product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderOfProducts } from './entities/order-of-product.entity';
import { ItemsService } from 'src/items/items.service';
import { Item } from 'src/items/entities/item.entity';


@Module({
  imports: [TypeOrmModule.forFeature([OrderOfProducts,Item])],
  providers: [OrderOfProductService ,ItemsService],
  exports : [OrderOfProductService]
})
export class OrderOfProductModule {}
