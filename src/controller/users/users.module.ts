import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UsersService, PrismaService, JwtService,AuthService],
  exports: [UsersService, PrismaService, JwtService, AuthService],
})
export class UsersModule {}
