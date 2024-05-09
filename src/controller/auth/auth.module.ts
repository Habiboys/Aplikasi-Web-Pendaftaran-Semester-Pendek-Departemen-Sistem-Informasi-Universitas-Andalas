import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';
import { RolesGuard } from './roles.guard'; // Mengimpor RolesGuard dari lokasi yang benar
// import { AuthGuard } from './auth.guard'; // Mengimpor RolesGuard dari lokasi yang benar
import { APP_GUARD } from '@nestjs/core'; // Mengimpor APP_GUARD dari @nestjs/core
import { AuthGuard } from './auth.guard';
import { TesService } from '../tes/tes.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    TesService,
    AuthService,
    UsersService,
    PrismaService,
    JwtService,
    RolesGuard,
    JwtStrategy,

      {
        provide: APP_GUARD,
        useClass: AuthGuard,
      },
    
    
  ],
  controllers: [AuthController],
})



export class AuthModule {}
