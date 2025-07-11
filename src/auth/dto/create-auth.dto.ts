import { IsString, IsEmail, IsPhoneNumber, IsNumber } from "class-validator";

export class CreateAuthDto {
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

}
export class SiginAuthDto {
    @IsEmail()
    email: string
    @IsString()
    password: string
}
export class VerifyUserAuthDto {
    @IsEmail()
    email: string
    @IsNumber()
    code: number
}

export class ResetPasswordDto {
    @IsNumber()
    code: number
    @IsString()
    password: string
    @IsEmail()
    email: string
}

export class ForgetPasswordDto {
    @IsEmail()
    email: string
}