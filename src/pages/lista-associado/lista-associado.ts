import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Segment } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Associado} from '../../models/Associado';
import { AssociadoProvider } from '../../providers/associado/associado';

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
  tipo = "pessoaJuridica";
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public provedor : AssociadoProvider
    ) { 
  }  

  ionViewWillEnter(){
    this.segment.value = this.tipo;
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => {
        this.todosAssociados = data;
        this.associados = data.filter((elemento) => {              
          if (elemento.tipo==this.tipo){
            this.listaBase = this.associados;
            return true;
          }
          return false;
        });
      }
    );
  }

  mudarFiltro(tipo){
    this.tipo = tipo;
    this.associados = this.todosAssociados;
    this.associados = this.associados.filter((elemento) => {
      if (elemento.tipo==tipo){
        this.listaBase = this.associados;
        return true;
      }
      return false;
    });
    this.listaBase = this.associados;
  }

  filtrarItens(event) {
    this.mudarFiltro(this.tipo);
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

  mostrarDados(id,tipo){
    if(tipo == "pessoaFisica"){
      this.navCtrl.push('MostraAssociadoPage',{id : id});
    }else{
      this.navCtrl.push('MostraAssociadoJuridicoPage',{id : id});
    }
    
  }

}

