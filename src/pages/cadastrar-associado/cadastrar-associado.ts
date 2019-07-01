import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor :AssociadoProvider,
    public alertCtrl: AlertController
    ) {
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
    if(id){
      this.provedor.gravar(this.associado,id).then(
        ()=>{
            this.abrePopupConfirmacao();
        }
      );
    }else{
      this.verificar().then(
        data => {
          if (data){
            this.provedor.gravar(this.associado,id).then(
              ()=>{
                  this.abrePopupConfirmacao();
              }
            );
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
        const cpf = this.associado.cpf;
        const associados = listaAssociados.filter((elemento) => {
          if (elemento.cpf==cpf){
            return true;
          }
          return false;
        });
        return associados.length == 0;
      }
    );
  }
    
  abrePopupConfirmacao(){
    let alert= this.alertCtrl.create();
    alert.setTitle('Informação');
    alert.setSubTitle('Associado gravado com sucesso!');
    alert.addButton({
      text: 'ok',
      handler: data=> {
        this.navCtrl.pop();
      }
    });
    alert.present().then(() =>{
    });
  }
    
}