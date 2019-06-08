import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as firebase from 'Firebase';
import {Associado} from '../../models/Associado';
import { AssociadoProvider } from '../../providers/associado/associado';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-lista-associado',
  templateUrl: 'lista-associado.html',
})
export class ListaAssociadoPage {
  
  id = null;
  associado: Associado;
  associados = [];
  todosAssociados=[];
  admin = false;
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public provedor : AssociadoProvider,
    public auth: AuthProvider
    ) { 
  }  

  ionViewWillEnter(){
    this.admin = this.auth.logado();
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => {
        this.associados = data;
        this.todosAssociados = data;

      }
    );
    
  }

  mudarFiltro(tipo){
    console.log(tipo);
    this.associados = this.todosAssociados;
    this.associados = this.associados.filter((elemento) => {
      if (elemento.tipo==tipo){
        return true;
      }
      return false;

    });
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
      }
    });
    alert.present().then(() => {
    });
  }

  mostrarDados(id,tipo){
    if(tipo = "pessoaFisica"){
      this.navCtrl.push('MostraAssociadoPage',{id : id});
    }else{
      
    }
    
  }

  excluir(id) {
    let alert = this.alerCtrl.create();
    alert.setTitle('Tem certeza que deseja excluir?');
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.provedor.excluir(id);
        this.chamaListar();
      }
    });
    alert.present().then(() => {
    });
  }

  editar(id,tipo){
    console.log(id);
    if (tipo == 'pessoaFisica'){
      this.navCtrl.push('CadastrarAssociadoPage',{id: id});
    }else{
      this.navCtrl.push('CadastroPessoaJuridicaPage',{id: id});
    }
  }
}

