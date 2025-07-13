import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResturantService } from './resturant.service';
import { CreateResturantDto } from './dto/create-resturant.dto';
import { UpdateResturantDto } from './dto/update-resturant.dto';

@Controller('resturant')
export class ResturantController {
  constructor(private readonly resturantService: ResturantService) {}

  @Post("add")
  create(@Body() createResturantDto: CreateResturantDto) {
    return this.resturantService.create(createResturantDto);
  }

  @Delete("delete/:id")
 async  remove(@Param("id") id: number) {
    return await this.resturantService.remove(id);
  }
@Patch("update-item/:id")
 async update(@Param("id") id: number, @Body() updateResturantDto: UpdateResturantDto) {
    return await this.resturantService.update(id, updateResturantDto);
  } 
}
