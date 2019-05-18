import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';
import { Associado } from '../../models/Associado';


@Injectable()
export class AssociadoProvider {
  ref = firebase.database().ref('Associados/');
  associados = [];
  associado : Associado;

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