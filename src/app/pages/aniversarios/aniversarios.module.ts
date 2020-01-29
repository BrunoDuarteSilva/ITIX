import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicModule } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { AniversariosPageRoutingModule } from './aniversarios-routing.module';

import { AniversariosPage } from './aniversarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniversariosPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [AniversariosPage]
})
export class AniversariosPageModule {
  public aniversariantes: any = [];

  constructor(public navCtrl: NavController){
  
  }
 
}


