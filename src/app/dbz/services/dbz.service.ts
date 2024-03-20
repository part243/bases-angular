import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { UUID } from 'uuidjs';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: UUID.generate(),
      name: 'Goku',
      power: 150090
    },
    {
      id: UUID.generate(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: UUID.generate(),
      name: 'Krillin',
      power: 5000
    }
  ];

  constructor() {
    console.log('Service initialized');
  }

  onNewCharacterFn(character: Character): void {
    character.id = UUID.generate();
    this.characters.push(character);
    this.characters.sort((a: Character, b: Character) => a.power > b.power ? -1 : 1);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((c:Character) => c.id !== id);

  }

}
