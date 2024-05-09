import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'qwerty', // Ganti dengan kunci rahasia yang aman
    });
  }

  async validate(payload: any) {
    // Lakukan validasi tambahan jika diperlukan
    return { userId: payload.sub, username: payload.username, roles: payload.roles[0] };
  }
}