import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

@Injectable()
export class EventoProvider {

  eventos = [];
  ref = firebase.database().ref('evento/');

  constructor(public http: HttpClient) {
  }

  servicos(){
    return this.ref.once('value')
      .then(
        resp => snapshotToArray(resp)
      );
  }

  gravar(evento, id = null){
    if (!id) {
      let newEvento = firebase.database().ref('evento/').push();
      newEvento.set(evento);
    }else {
      let newEvento = firebase.database().ref(`evento/${id}`);
      newEvento.update(evento);
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