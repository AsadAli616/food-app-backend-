import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/address.dto';
import { AuthGuard } from 'src/helper/auth.guard';
@UseGuards(AuthGuard)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}
  @Post('create')
  async create(
    @Body() createAddressDto: CreateAddressDto,
    @Req() req: Request & { user: { id: number } },
  ) {
    const address = {
      ...createAddressDto,
      user: { id: req?.user?.id },
    };
    return await this.addressService.createAddress(address);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() updateAddressDto: Partial<CreateAddressDto>,
  ) {
    return this.addressService.updateAddress(id, updateAddressDto);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return this.addressService.deleteAddress(id);
  }
}
