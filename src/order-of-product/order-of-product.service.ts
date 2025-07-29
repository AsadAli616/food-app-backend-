import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateOrderOfProductDto } from './dto/order-of-product';
import { ItemsService } from 'src/items/items.service';
import { Item } from 'src/items/entities/item.entity';
import { Repository } from 'typeorm';
import { OrderOfProducts } from './entities/order-of-product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderOfProductService {
    constructor(
        private readonly itemsService: ItemsService,
         @InjectRepository(OrderOfProducts)
        private  OrderOfProductsRepository: Repository<OrderOfProducts>
    ) {}
   async create(createOrderDto: Partial<CreateOrderOfProductDto>) {
    const itemsId = createOrderDto.itemId;
    console.log("itemsId", itemsId);
    const item = await this.itemsService.findOne({ id: itemsId }) ;
    console.log("item", item);
    if (!item) {
            throw new BadGatewayException(`Item with ID ${itemsId} does not exist`);
        }
        createOrderDto["item"] = {id : item.id}
        createOrderDto["price"] = item.price;
        // if(item.isAvailable === false) {
        //     throw new BadGatewayException(`Item with ID ${itemid} is not available`);
        // }
        const newItem =  this.OrderOfProductsRepository.create(createOrderDto)
        return await this.OrderOfProductsRepository.save(newItem);
    }
}
