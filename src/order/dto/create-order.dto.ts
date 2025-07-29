import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
     @IsString()
     status: string;
     @IsArray()
     itemsId:{id:number,quantity:number}[];
    
}
export class CreateOrderDtoForController {
     @IsString()
     status: string;
     @IsArray()
     itemsId:{id:number,quantity:number}[];
 
}
