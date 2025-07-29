import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderOfProductService } from 'src/order-of-product/order-of-product.service';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderOfProducts } from 'src/order-of-product/entities/order-of-product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private  orderRepository: Repository<Order>,
    private orderOfProductService: OrderOfProductService
  ) {}
  async create(createOrderDto: CreateOrderDto) {
  createOrderDto["status"] = 'pending';
  let totalPrice = 0;
  const order = this.orderRepository.create(createOrderDto);
  const savedOrder = await this.orderRepository.save(order);
  const itemsObj = createOrderDto.itemsId
 for (const item of itemsObj) {
  const itemId = item.id; 
  const quantity = item.quantity;
  const newOrder = {
   itemId,
   quantity,
   order:{id: savedOrder.id},
  };
 const savedOrderOfProduct: Partial<OrderOfProducts> = await this.orderOfProductService.create(newOrder) as OrderOfProducts;
  const price= savedOrderOfProduct?.price || 0

   const itemPrice = price * quantity;
  
  totalPrice += Math.round(itemPrice)
 
  }
  
 await this.orderRepository.save({
  ...savedOrder,  price:totalPrice});
  // Return the saved order with its products and items
  return await this.orderRepository.findOne({ where: { id: savedOrder.id }, relations: ['orderOfProducts', 'orderOfProducts.item'] });
  } 

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
