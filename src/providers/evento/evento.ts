import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

@Injectable()
export class EventoProvider {

  eventos = [];
  ref = firebase.database().ref('Eventos/');

  constructor(public http: HttpClient) {
  }

  listar(){
    return this.ref.orderByChild("data").once('value')
      .then(
        resp => snapshotToArray(resp)
      );
  }

  listarPorId(id){
    return firebase.database().ref(`Eventos/${id}`).once('value')
      .then(
        resp => snapshotToObject(resp)
      );
  }

  gravar(evento, id = null){
    if (!id) {
      let newEvento = this.ref.push();
      return newEvento.set(evento);
    }else {
      let newEvento = firebase.database().ref(`Eventos/${id}`);
      return newEvento.update(evento);
    }
  }

  excluir(id){
    firebase.database().ref('Eventos/'+id).remove();
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