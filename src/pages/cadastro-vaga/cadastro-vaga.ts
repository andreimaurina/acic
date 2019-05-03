import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vaga } from '../../models/Vaga';
import * as firebase from 'Firebase';

@IonicPage()
@Component({
  selector: 'page-cadastro-vaga',
  templateUrl: 'cadastro-vaga.html',
})
export class CadastroVagaPage {
  
  vaga: Vaga;
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.vaga = new Vaga();
    } 
  }

  gravar(){
    if (!this.id) {
      console.log(this.vaga);
      let newVaga = firebase.database().ref('vaga/').push();
      newVaga.set(this.vaga);
    }
    this.navCtrl.pop(); 
  }

}
