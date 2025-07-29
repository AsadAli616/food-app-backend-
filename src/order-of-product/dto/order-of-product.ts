import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateOrderOfProductDto {
    @IsNumber()
    itemId:number;
    @IsNumber()
    quantity: number;
    @IsNumber()
    price: number;
   
}
