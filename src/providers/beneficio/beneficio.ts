import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

@Injectable()
export class BeneficioProvider {

  eventos = [];
  ref = firebase.database().ref('beneficio/');

  constructor(public http: HttpClient) {
  }

  listar(){
    return this.ref.once('value')
      .then(
        resp => snapshotToArray(resp)
      );
  }

  gravar(beneficio, id = null){
    if (!id) {
      let newBeneficio = firebase.database().ref('beneficio/').push();
      newBeneficio.set(beneficio);
    }else {
      let newBeneficio = firebase.database().ref(`beneficio/${id}`);
      newBeneficio.update(beneficio);
    }
  }

  excluir(id){
    firebase.database().ref('beneficio/'+id).remove();
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