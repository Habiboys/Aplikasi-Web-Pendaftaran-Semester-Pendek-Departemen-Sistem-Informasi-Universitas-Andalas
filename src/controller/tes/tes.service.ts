import { Injectable } from '@nestjs/common';


@Injectable()
export class TesService {

private heroes;
  constructor() {
    this.heroes = [
        {
            id: 1,
            nama: 'asep',
            role: 'fighter',
            gender: 'male',
          },
          {
            id: 2,
            nama: 'yanti',
            role: 'mage',
            gender: 'female',
          }
    
    
    ];
  }

  create(hero) {
    this.heroes.push(hero);
  }

  findAll() {
    return this.heroes;
  }
}