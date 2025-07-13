import { PartialType } from "@nestjs/mapped-types";
import { CreateItemDto } from "src/items/dto/create-item.dto";
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateResturantDto {
@IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number; 
}
