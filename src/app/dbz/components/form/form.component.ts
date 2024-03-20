import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form-component',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    id: '',
    name: '',
    power: 0
  };

  emitCharacter():void {
    if(this.newCharacter.name.trim().length > 0 && this.newCharacter.power >= 0) {
      this.onNewCharacter.emit(this.newCharacter);
      console.log(`Personaje agregado ${JSON.stringify(this.newCharacter)}`);
    }else{
      console.error('Agregue un nuevo personaje');
    }

    this.newCharacter = {
      id: '',
      name: '',
      power: 0
    }

  }



}
