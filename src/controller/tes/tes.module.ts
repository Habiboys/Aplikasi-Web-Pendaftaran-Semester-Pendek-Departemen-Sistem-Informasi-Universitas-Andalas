import { Module } from '@nestjs/common';
import { TesController } from "./tes.controller";
import { TesService } from "./tes.service";
import { PrismaService } from 'src/prisma.service';

import { UsersService } from '../users/users.service';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    controllers: [TesController],
    providers: [TesService, PrismaService, UsersService, JwtService, AuthService],
  })
  export class TesModule {}