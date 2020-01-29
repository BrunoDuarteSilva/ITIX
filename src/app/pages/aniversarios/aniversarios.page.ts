import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-aniversarios',
  templateUrl: './aniversarios.page.html',
  styleUrls: ['./aniversarios.page.scss'],
})
export class AniversariosPage implements OnInit {
  public aniversariantes: any = [];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.aniversariantes = "[{\"nome\": \"José da Silva Teixeira\"},{\"nome\": \"Luiz Carlos Garcia\"},{\"nome\": \"Maria Aparecida Vieira Couto\"}"+
    ", {\"nome\": \"Roberto Almeida Spoletti\"},{\"nome\": \"Ana Maria Cerqueira\"},{\"nome\": \"Pedro Arthur Nogueira Rispini\"},{\"nome\": \"Francine Fonseca Pedrini\"}"+"]";
     
    this.aniversariantes = JSON.parse(this.aniversariantes);

  }
}


