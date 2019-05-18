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
    return this.ref.once('value')
      .then(
        resp => snapshotToArray(resp)
      );
  }

  listarPorId(id){
    return firebase.database().ref(`evento/${id}`).once('value')
      .then(
        resp => snapshotToObject(resp)
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

  excluir(id){
    firebase.database().ref('evento/'+id).remove();
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