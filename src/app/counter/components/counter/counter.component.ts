import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <hr>
      <h1>Componente Counter</h1>
      <h3>Counter: {{counter}}</h3>
      <button  class="btn btn-success m-3" (click)="increment(+1)">Click Me to +1</button>
    <button  class="btn btn-success m-3" (click)="reset()">Click Me to reset</button>
    <button  class="btn btn-success m-3" (click)="increment(-1)" >Click Me to -1</button>
<hr>
  `,
})

export class CounterComponent implements OnInit {
  public title:string = 'Mi primera App de Angular';
  public counter:number = 10;

  increment(value:number):void {
    this.counter = this.counter + value;
  }

  reset():void {
    this.counter = 10;
  }


  constructor() { }

  ngOnInit() { }
}

