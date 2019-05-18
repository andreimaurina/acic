import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Servico} from '../../models/Servico';
import { v } from '@angular/core/src/render3';




@Injectable()
export class ServicoProvider {
  servico : Servico;
  servicos = [];
  
  ref = firebase.database().ref('servico/');

  constructor(public http: HttpClient) {
  }

  listar(){
    return this.ref.once('value')
      .then(
        resp => snapshotToArray(resp)
      );
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


