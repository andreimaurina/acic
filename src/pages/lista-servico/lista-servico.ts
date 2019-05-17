import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
import * as firebase from 'Firebase';
import {Servico} from '../../models/Servico'
import { CadastroServicoPage } from '../cadastro-servico/cadastro-servico';
import { v } from '@angular/core/src/render3';
import { ServicoProvider } from '../../providers/servico/servico';


@IonicPage()
@Component({
  selector: 'page-lista-servico',
  templateUrl: 'lista-servico.html',
})
export class ListaServicoPage {


  servicos = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provedor : ServicoProvider
    ) {
  }
  
  ionViewWillEnter(){
    this.chamaListar();
  }

  chamaListar(){
    this.provedor.listar()
    .then(
      data => this.servicos = data
    );
  }

  novoServico() {
    this.navCtrl.push('CadastroServicoPage');
  }
}

