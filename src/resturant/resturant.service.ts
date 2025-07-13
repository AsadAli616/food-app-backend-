import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateResturantDto } from './dto/create-resturant.dto';
import { UpdateResturantDto } from './dto/update-resturant.dto';
import { ItemsService } from 'src/items/items.service';
import { Item } from 'src/items/entities/item.entity';

@Injectable()
export class ResturantService {
  constructor(
    private itemsService: ItemsService
  ){}
async create(createResturantDto: CreateResturantDto) {
    return await this.itemsService.create(createResturantDto)
  }
async update(id: number, updateResturantDto: Partial<Item>) {
  const item = await this.itemsService.findOne({ id });
  if (!item) {
    throw new BadGatewayException('Item not found');
  }
  const updatedItem = { ...item, ...updateResturantDto };

  return await this.itemsService.update(updatedItem );
}

async remove(id: number) {
  const item = await this.itemsService.findOne({ id });
  if (!item) {
    throw new BadGatewayException('Item not found');
  }
  
  return await this.itemsService.remove(item);
}
}
