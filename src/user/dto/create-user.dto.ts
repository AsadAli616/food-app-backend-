import { IsDateString, IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    full_Name: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsDateString()
    dateOfBirth: Date;
    @IsPhoneNumber()
    phoneNumber: string;

}
