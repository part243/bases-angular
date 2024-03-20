
import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports:[
    CounterComponent //para consumirlo en otros modulos mundo exterior
  ]
})
export class CounterModule{}
