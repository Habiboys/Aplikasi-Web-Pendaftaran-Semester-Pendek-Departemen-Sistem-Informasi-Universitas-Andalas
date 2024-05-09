import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { User } from './user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Ambil data pengguna dari objek request

    console.log(user); // Periksa isi objek user

    // Periksa apakah properti roles ada dan tidak kosong
    if (!user || !user.roles || user.roles.length === 0) {
      throw new ForbiddenException('User does not have any roles assigned');
    }

    return requiredRoles.some((role) => user.roles.includes(role));
  }
}