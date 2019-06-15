import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Servico} from '../../models/Servico';
import { v } from '@angular/core/src/render3';



@Injectable()
export class ServicoProvider {
  servicos = [];
  
  ref = firebase.database().ref('Servicos/');

  constructor(public http: HttpClient) {
  }

  listar(){
    return this.ref.once('value')
      .then(
        resp => snapshotToArray(resp)
      );
  }

  listarPorId(id){
    return firebase.database().ref(`Servicos/${id}`).once('value')
      .then(
        resp => snapshotToObject(resp)
      );
  }

  gravar(servico, id = null){
    if (!id) {
      let newServico = this.ref.push();
      return newServico.set(servico);
    }else {
      let newServico = firebase.database().ref(`Servicos/${id}`);
      return newServico.update(servico);
    }
  }

  excluir(id){
    firebase.database().ref('Servicos/'+id).remove();
  } 
}


export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
}
export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;
  return item;
}





