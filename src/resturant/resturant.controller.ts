import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ResturantService } from './resturant.service';
import { CreateResturantDto } from './dto/create-resturant.dto';
import { UpdateResturantDto } from './dto/update-resturant.dto';
import { AuthGuard } from 'src/helper/auth.guard';
import { RolesGuard } from 'src/helper/role.guard';
import { Roles } from 'src/common/roles.decorator';
import { UserROLE } from 'src/eums/user.enum';
@UseGuards(AuthGuard, RolesGuard)
@Roles(UserROLE.RESTAURANT)
@Controller('resturant')
export class ResturantController {
  constructor(private readonly resturantService: ResturantService) {}

  @Post('add')
  create(
    @Body() createResturantDto: CreateResturantDto,
    @Req() req: Request & { user: { id: number } },
  ) {
    const userId = req.user.id;
    const resturantData = {
      ...createResturantDto,
      user: { id: userId },
    };
    return this.resturantService.create(resturantData);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    return await this.resturantService.remove(id);
  }
  @Patch('update-item/:id')
  async update(
    @Param('id') id: number,
    @Body() updateResturantDto: UpdateResturantDto,
  ) {
    return await this.resturantService.update(id, updateResturantDto);
  }
}
