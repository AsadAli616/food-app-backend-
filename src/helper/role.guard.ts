import { Body, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/common/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate{
      constructor(private reflector: Reflector) {}
    
canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<any>();
    const user = request?.user as {role:string } | undefined;;
       if(!user){
           throw new UnauthorizedException('Invalid token');
}
       if(!user?.role){
           throw new UnauthorizedException('Invalid token');
}
   const requiredRoles =
      this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) || [];



    return  requiredRoles.length === 0 || requiredRoles.includes(user?.role);
  }
}