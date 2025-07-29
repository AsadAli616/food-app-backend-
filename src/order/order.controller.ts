import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto, CreateOrderDtoForController } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthGuard } from 'src/helper/auth.guard';
import { RolesGuard } from 'src/helper/role.guard';
import { UserROLE } from 'src/eums/user.enum';
import { Roles } from 'src/common/roles.decorator';
@UseGuards(AuthGuard,RolesGuard)
@Roles(UserROLE.USER)
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post("place-order")
 async create(@Body() createOrderDto: CreateOrderDtoForController, @Req() req: Request &{ user: { id: number } }) {
  const order = {
    ...createOrderDto,  
   user: { id: req?.user?.id }
  };

    return await this.orderService.create(order);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
