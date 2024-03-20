import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { DbzModule } from "../dbz/dbz.module";




@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    ListComponent,
    HeroComponent,
  ],
  imports: [
    CommonModule,
    DbzModule
  ]
})
export class HeroesModule { }
