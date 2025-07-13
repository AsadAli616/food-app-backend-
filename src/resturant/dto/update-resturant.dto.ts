import { PartialType } from '@nestjs/mapped-types';
import { CreateResturantDto } from './create-resturant.dto';
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsBoolean } from 'class-validator';
export class UpdateResturantDto {
    @IsOptional()
    @IsString()
      @IsNotEmpty()
      name: string;
      @IsOptional()
      @IsString()
      @IsNotEmpty()
      description: string;
      @IsOptional()
      @IsNumber()
      price: number;
      @IsOptional()
      @IsBoolean()
      isAvailable?: boolean;
      @IsOptional()
      @IsString()
      @IsOptional()
      imageUrl?: string;
   
}
