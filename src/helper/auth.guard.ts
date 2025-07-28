import { Body, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    const token = request.headers['token'] as string | undefined;

    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {

     const payload : jwt.JwtPayload & {id: number ,role:string} =   jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload & {id: number,role:string};
     console.log("payload",payload.payload.id)
     if(!payload?.payload?.id){
       throw new UnauthorizedException('Invalid token');
      }
     request["user"] = payload.payload


     return true;
    } catch (err) {
      throw new UnauthorizedException('err',err);
    }

  }
}