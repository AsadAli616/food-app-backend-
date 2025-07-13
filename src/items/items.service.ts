import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
      private itemRepository: Repository<Item>
  ) {}
async create(createItemDto: CreateItemDto) {
const newItem = this.itemRepository.create(createItemDto);
return await this.itemRepository.save(newItem);
  }

 async findOne(where: FindOptionsWhere<Item>): Promise<Item | null> {
   return await this.itemRepository.findOne({ where });
 }

  async update( updateItemDto: Partial<Item>) {
  return await this.itemRepository.save(updateItemDto);
  }

 async remove(updateItemDto: Item) {
    return await this.itemRepository.remove(updateItemDto);
  }
}
