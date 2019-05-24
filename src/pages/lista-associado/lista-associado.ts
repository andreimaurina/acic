import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as firebase from 'Firebase';
import {Associado} from '../../models/Associado';
import { AssociadoProvider } from '../../providers/associado/associado';

@IonicPage()
@Component({
  selector: 'page-lista-associado',
  templateUrl: 'lista-associado.html',
})
export class ListaAssociadoPage {
  id = null;
  associado: Associado;
  associados = [];
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public provedor : AssociadoProvider
    ) { 
  }  

  ionViewWillEnter(){
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => this.associados = data
    );
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

    alert.addButton('Cancelar');
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

  