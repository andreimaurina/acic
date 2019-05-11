import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { AlertController } from 'ionic-angular';
import {Associado} from '../../models/Associado';

@IonicPage()
@Component({
  selector: 'page-lista-associado',
  templateUrl: 'lista-associado.html',
})
export class ListaAssociadoPage {
  id = null;
  associado: Associado;
  associados = [];
  ref = firebase.database().ref('Associados/');

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
    this.ref.on('value', resp => {
    this.associados = [];
    this.associados = snapshotToArray(resp);
    });
  }  

  gravar() {
    if (!this.id) {
      let newAssociado = firebase.database().ref('Associados/').push();
      newAssociado.set(this.associado); 
    }
    this.navCtrl.pop();
  }
  novoAssociado() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Selecione o tipo');

    alert.addInput({
      type: 'radio',
      label: 'Pessoa Física',
      value: 'PF',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Pessoa Jurídica',
      value: 'PJ'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        if (data == 'PF'){
          this.navCtrl.push('CadastrarAssociadoPage');
        }else{
          this.navCtrl.push('CadastroPessoaJuridicaPage');
        }
        console.log('Radio data:', data);
      }
    });
    alert.present().then(() => {
    });
  }
}
export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.codigo = childSnapshot.codigo;
      returnArr.push(item);
  });
  return returnArr;
}
  