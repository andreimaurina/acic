import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';
/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {

  eventos = [];
  ref = firebase.database().ref('evento/');

  constructor(public http: HttpClient) {
  }

  gravar(){
    this.ref.on('value', resp => {
    this.eventos = [];
    this.eventos = snapshotToArray(resp);
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