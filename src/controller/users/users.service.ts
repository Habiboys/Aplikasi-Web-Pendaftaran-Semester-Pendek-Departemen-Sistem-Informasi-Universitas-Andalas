import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Users } from '.prisma/client'; // Pastikan Anda mengimpor tipe yang benar

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async findOne(email: string): Promise<Users | null> {
        return this.prisma.users.findUnique({ where: { email: email } });
    }
}

  // async findOne(email:string): Promise<Users | undefined> {
  //   return this.prisma.users.findUnique({ where: {email}});
  // }