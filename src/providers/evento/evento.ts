import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';
import { Evento } from '../../models/Evento';

@Injectable()
export class EventoProvider {
  evento: Evento;
  eventos = [];
  ref = firebase.database().ref('evento/');

  constructor(public http: HttpClient) {
  }

  listar(){
    return this.ref.once('value')
      .then(
        resp => snapshotToArray(resp)
      );
  }

  gravar(id){
    if (!id) {
      let newEvento = firebase.database().ref('evento/').push();
      newEvento.set(this.evento);
    }else {
      let newEvento = firebase.database().ref(`evento/${id}`);
      newEvento.update(this.evento);
    }
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