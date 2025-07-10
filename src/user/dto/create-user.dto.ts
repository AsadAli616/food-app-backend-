import { IsDateString, IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    full_Name: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsString()
    dateOfBirth: string;
    @IsPhoneNumber()
    phoneNumber: string;
    @IsNumber()
    code:number
}
export class SiginDto{
    @IsEmail()
    email:string
    @IsString()
    password:string
}
