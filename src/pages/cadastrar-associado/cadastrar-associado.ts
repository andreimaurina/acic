import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Associado, PessoaFisica, PessoaJuridica} from '../../models/Associado';
import { AssociadoProvider } from '../../providers/associado/associado';

@IonicPage()
@Component({
  selector: 'page-cadastrar-associado',
  templateUrl: 'cadastrar-associado.html',
})
export class CadastrarAssociadoPage {
  id = null;
  associado: PessoaFisica;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public provedor :AssociadoProvider) {
 
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.associado = new PessoaFisica();
    }else {
      this.chamaPorId(this.id);
    }
  }

  chamaPorId(id){
    this.provedor.listarPorId(id)
      .then(
      data => this.associado = data
    );
  }

  gravar(id){
    this.provedor.gravar(this.associado,id);
    this.navCtrl.pop();
  }
  

}
