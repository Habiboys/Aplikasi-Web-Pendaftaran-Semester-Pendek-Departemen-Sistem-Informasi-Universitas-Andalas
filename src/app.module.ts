import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesController } from './controller/tes/tes.controller';
import { TesService } from './controller/tes/tes.service';
import { TesModule } from './controller/tes/tes.module';
import { AuthModule } from './controller/auth/auth.module';
import { UsersModule } from './controller/users/users.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { RolesGuard } from './controller/auth/roles.guard';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './controller/auth/constants';

@Module({
  imports: [
    TesModule,
    AuthModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard, // Menyediakan RolesGuard sebagai APP_GUARD
    },

  ],
})
export class AppModule {}
