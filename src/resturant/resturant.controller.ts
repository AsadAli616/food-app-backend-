import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResturantService } from './resturant.service';
import { CreateResturantDto } from './dto/create-resturant.dto';
import { UpdateResturantDto } from './dto/update-resturant.dto';

@Controller('resturant')
export class ResturantController {
  constructor(private readonly resturantService: ResturantService) {}

  @Post("create")
  create(@Body() createResturantDto: CreateResturantDto) {
    return this.resturantService.create(createResturantDto);
  }


}
