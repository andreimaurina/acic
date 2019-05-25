import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AssociadoProvider } from '../../providers/associado/associado';
import { PessoaJuridica } from '../../models/Associado';

@IonicPage()
@Component({
  selector: 'page-cadastro-pessoa-juridica',
  templateUrl: 'cadastro-pessoa-juridica.html',
})
export class CadastroPessoaJuridicaPage {
  id = null;
  associado: PessoaJuridica;

  constructor(public navCtrl: NavController, public navParams: NavParams,public provedor :AssociadoProvider) {
    this.id = this.navParams.data.id;
    if (!this.id) {
      this.associado = new PessoaJuridica();
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPessoaJuridicaPage');
  }

}
