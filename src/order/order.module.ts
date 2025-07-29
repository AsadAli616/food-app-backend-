import { Item } from './../items/entities/item.entity';
import { OrderOfProductService } from 'src/order-of-product/order-of-product.service';
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ItemsService } from 'src/items/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderOfProducts } from 'src/order-of-product/entities/order-of-product.entity';
import { Order } from './entities/order.entity';
import { OrderOfProductModule } from 'src/order-of-product/order-of-product.module';

@Module({
 
  imports: [TypeOrmModule.forFeature([Order,OrderOfProducts,Item]),OrderOfProductModule],
  controllers: [OrderController],
  providers: [OrderService,OrderOfProductService,ItemsService],
  exports: [OrderService],
})
export class OrderModule {}
