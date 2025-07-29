import { IsString, IsEmail, IsPhoneNumber, IsNumber } from 'class-validator';
export class CreateAddressDto {
  @IsString()
  address: string;
  @IsString()
  city: string;
  @IsString()
  latitude: string;
  @IsString()
  longitude: string;
}
