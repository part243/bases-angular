import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/MainPageComponent';
import { ListadoComponent } from './components/listado/listado.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoComponent,
    FormComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
