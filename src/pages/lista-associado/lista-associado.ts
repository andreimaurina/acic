import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Segment } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Associado} from '../../models/Associado';
import { AssociadoProvider } from '../../providers/associado/associado';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-lista-associado',
  templateUrl: 'lista-associado.html',
})
export class ListaAssociadoPage {
  
  @ViewChild(Segment) segment: Segment;

  id = null;
  associado: Associado;
  associados = [];
  listaBase = [];
  todosAssociados=[];
  admin = false;
  tipo = "";
 
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
    this.segment.value = "pessoaJuridica";
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
    this.tipo = tipo;
    this.associados = this.todosAssociados;
    this.associados = this.associados.filter((elemento) => {              //----------alguma alteração para iniciar filtrado p/ juridico
      if (elemento.tipo==tipo){
        return true;
      }
      return false;
    });
    this.listaBase = this.associados;
  }

  filtrarItens(event) {
    var pesquisado = event.target.value;
    if (this.tipo == "pessoaFisica"){
      this.associados = this.listaBase.filter((v) => {
        if(v.nome && pesquisado) {
          if (v.nome.toLowerCase().indexOf(pesquisado.toLowerCase()) > -1){
            return true;
          }
        }else{
          return this.associados;
        }
      });
    }else if (this.tipo == "pessoaJuridica"){
      this.associados = this.listaBase.filter((v) => {
        if(v.nomeFantasia && pesquisado) {
          if (v.nomeFantasia.toLowerCase().indexOf(pesquisado.toLowerCase()) > -1){
            return true;
          }
        }else{
          return this.associados;
        }
      });
    }
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

