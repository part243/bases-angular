import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroeBorradoNombre: string = '';
  public heroNames: string[] = [
    'Spiderman',
    'Batman',
    'Superman',
    'Ironman',
    'Thor',
    'Hulk',
    'Wolverine',
    'Flash',
    'Green Lantern',
    'Wonder',
  ];

  removeDisableFromButton(heroName:string):void {
    this.heroNames.pop()
    this.heroeBorradoNombre = heroName;
    const btn = document.querySelector('.btn');
    if(this.heroNames.length > 0) {
      btn!.classList.remove('disabled');
    } else {
      btn!.classList.add('disabled');
    }


  }
}
