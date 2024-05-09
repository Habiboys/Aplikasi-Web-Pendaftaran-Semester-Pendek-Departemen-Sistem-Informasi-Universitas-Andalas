// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && (await compare(password, user.password))) {
      const { password, ...result } = user;
      const payload = {
        sub: user.id,
        username: user.email,
      };
      return {
        ...result,
        access_token: await this.jwtService.signAsync(payload, {
          secret: 'kunci_rahasia_aman', // Gunakan kunci rahasia yang lebih aman
          expiresIn: '60s',
        }),
      };
    }
    throw new UnauthorizedException();
  }
}