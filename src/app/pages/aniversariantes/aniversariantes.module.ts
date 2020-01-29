import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AniversariantesPageRoutingModule } from './aniversariantes-routing.module';
import { AniversariantesPage } from './aniversariantes.page';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
const routes: Routes = [{
  path: '',
  component: AniversariantesPage
}];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniversariantesPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [AniversariantesPage]
})
export class AniversariantesPageModule { 

}
