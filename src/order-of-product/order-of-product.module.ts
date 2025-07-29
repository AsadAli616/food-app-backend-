import { Module } from '@nestjs/common';
import { OrderOfProductService } from './order-of-product.service';

@Module({
  providers: [OrderOfProductService]
})
export class OrderOfProductModule {}
