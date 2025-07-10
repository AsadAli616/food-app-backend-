import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
    IsOptional,
    IsEmail,
    IsString,
    IsDate,
    IsPhoneNumber,
    IsNumber,

} from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    full_Name?: string;
    @IsOptional()
    @IsEmail()
    email?: string;
    @IsOptional()
    @IsString()
    password?: string;
    @IsOptional()
    @IsPhoneNumber()
    phoneNumber?: string;
    @IsOptional()
    @IsDate()
    dateOfBirth?: Date;
    @IsOptional()
    @IsString()
    profilePicture?: string;
    @IsOptional()
    @IsString()
    CustomerId: string;
    @IsOptional()
    @IsString()
    CardId: string;
    @IsOptional()
    @IsNumber()
    code:number;

}
