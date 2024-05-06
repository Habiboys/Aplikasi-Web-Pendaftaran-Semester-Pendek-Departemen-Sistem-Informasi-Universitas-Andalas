import { IsAlpha, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHeroDto{
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    nama: string ;

    @IsNotEmpty()
    @IsString()
    role: string;

    @IsNotEmpty()
    @IsString()
    gender: string;
}