import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

@Injectable()
export class EventoProvider {

  eventos = [];
  ref = firebase.database().ref('evento/');

  constructor(public http: HttpClient) {
  }

  listar(){
    return this.ref.on('value', resp => {
    this.eventos = [];
    this.eventos = snapshotToArray(resp);
    });
    // .then(
    //   data=>{
    //     this.usuario = data;
    //     return data;
    //   }
    // );  
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