import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor :AssociadoProvider,
    public alertCtrl: AlertController
    ) {
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
    if(id){
      this.provedor.gravar(this.associado,id);
      this.navCtrl.pop();
    }else{
      this.verificar().then(
        data => {
          if (data){
            this.provedor.gravar(this.associado,id);
            this.navCtrl.pop();
          } else {
            let alert = this.alertCtrl.create();
            alert.setTitle('Atenção!');
            alert.setSubTitle('Este associado já está cadastrado!');
            alert.addButton('Ok');
            alert.present().then(() => {
            });
          }
        }
      );
    }
  }

  verificar(){
    return this.provedor.listar()
    .then(
      data => {
        const listaAssociados = data;
        const cnpj = this.associado.cnpj;
        const associados = listaAssociados.filter((elemento) => {
          if (elemento.cnpj==cnpj){
            return true;
          }
          return false;
        });
        return associados.length == 0;
      }
    );
  }


}
