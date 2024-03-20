import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-listado-component',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  @Input() public characterList: Character[] = [];
  @Output() public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  clicDeleteCharacter(id:string):void{
    if(this.characterList.find((c:Character) => c.id === id)){
      this.onDeleteCharacter.emit(id);
    }else{
      console.error('No se encontro el personaje');
    }
  }

}
