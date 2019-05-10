import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
import * as firebase from 'Firebase';
import {Servico} from '../../models/Servico'
import { CadastroServicoPage } from '../cadastro-servico/cadastro-servico';
import { v } from '@angular/core/src/render3';


@IonicPage()
@Component({
  selector: 'page-lista-servico',
  templateUrl: 'lista-servico.html',
})
export class ListaServicoPage {


  ref = firebase.database().ref('servico/');
  servicos = [];
  listaServico = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value',resp => {
      this.servicos = [];
      this.servicos = snapshotToArray(resp);
      this.listaServico = this.servicos;

    });
  }
  novoServico() {
    this.navCtrl.push('CadastroServicoPage');
  }
  filtrarItens(searchbar) {
    this.servicos = this.listaServico;
    var q = searchbar.srcElement.value;
    if(!q) {
      return;
    }
    this.servicos = this.servicos.filter((v) => {
      if(v.nome && q) {
        if (v.nome.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
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

