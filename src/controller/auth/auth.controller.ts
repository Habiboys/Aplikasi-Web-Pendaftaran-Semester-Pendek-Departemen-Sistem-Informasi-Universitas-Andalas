import { Body, Controller, Post, HttpCode, HttpStatus, Req, Get, Request, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Public } from './auth.decorator';
import { Console } from 'console';
import { request } from 'http';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)



  @Public()
  @Post('login')
  async signIn(@Body () dto: Record<string, any> ) {
    return this.authService.signIn(dto.email, dto.password);
  }


  // @Get('halo')
  // halo(@Res() res){
  //   console.log('halo');
  //   const value = 'Bearer' + user.access_token
  //   res.setHeader('Authorization', 'value')
  // }

 
}