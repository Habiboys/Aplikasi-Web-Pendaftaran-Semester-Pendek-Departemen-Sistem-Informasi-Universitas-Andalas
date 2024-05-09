// // roles.decorator.ts

// import { SetMetadata } from '@nestjs/common';

// export const ROLES_KEY = 'roles';
// export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);


import { SetMetadata } from '@nestjs/common';
import { Role } from './role.enum';



export const Roles = (...roles: Role[]) => SetMetadata('roles', roles)