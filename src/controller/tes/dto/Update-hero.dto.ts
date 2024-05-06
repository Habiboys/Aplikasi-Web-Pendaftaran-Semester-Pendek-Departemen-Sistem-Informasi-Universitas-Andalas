
import { PartialType } from '@nestjs/mapped-types';
import { CreateHeroDto } from './Create-hero.dto';

export class UpdateHeroDto extends PartialType (CreateHeroDto){}