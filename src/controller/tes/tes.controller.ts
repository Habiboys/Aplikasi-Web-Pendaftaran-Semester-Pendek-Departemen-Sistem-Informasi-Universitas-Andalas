import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Render,
  Req,
  Res,
} from '@nestjs/common';

import { UpdateHeroDto } from './dto/Update-hero.dto';
import { CreateHeroDto } from './dto/Create-hero.dto';
import { TesService } from './tes.service';

@Controller('tes')
export class TesController {
  constructor(private tesService: TesService) {}

  @Get('hero')
  @HttpCode(200)
  index(@Res() res) {
    res.json(this.tesService.findAll());
  }

  @Get('view')
  @HttpCode(200)
  view(@Res({ passthrough: true }) res) {
    res.cookie('name', 'cookie');
    return 'ini view';
  }

  //passthorugh itu digunakan jika kita menggunakan balikan dari nest dan express jika salah satunya saja tidak perlu

  @Post('store')
  store(
    @Req() req,
    @Body() createhero: CreateHeroDto,
    @Res({ passthrough: true }) res,
  ) {
    this.tesService.create(createhero);
    return this.tesService.findAll();
  }

  @Post('add')
  add(@Req() req, @Res({ passthrough: true }) res) {
    this.tesService.create(req.body);
    return this.tesService.findAll();
  }

  @Get('home')
  home(@Req() req, @Res() res) {
    res.render('home', { message: 'haloooaasad' });
  }

  @Get('detail/:id')
  detail(@Param('id') id: number) {
    const hero = this.tesService.findAll().filter((hero) => {
      return hero.id == id;
    });
    return hero;
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() obj: UpdateHeroDto) {
    this.tesService.findAll().find((hero) => {
      if (hero.id == id) {
        hero.nama = obj.nama;
        hero.role = obj.role;
        hero.gender = obj.gender;
      }
    });

    return this.tesService.findAll();
  }

  @Delete('delete/:id')
  destroy(@Param('id') id: number) {
    const hero = this.tesService.findAll().findIndex((hero) => hero.id !== id);
    this.tesService.findAll().splice(hero, 1);
    return this.tesService.findAll();
  }
}
