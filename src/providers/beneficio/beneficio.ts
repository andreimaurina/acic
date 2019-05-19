import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

@Injectable()
export class BeneficioProvider {

  eventos = [];
  ref = firebase.database().ref('Beneficios/');

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
      let newBeneficio = this.ref.push();
      newBeneficio.set(beneficio);
    }else {
      let newBeneficio = firebase.database().ref(`Beneficios/${id}`);
      newBeneficio.update(beneficio);
    }
  }

  excluir(id){
    firebase.database().ref('Beneficios/'+id).remove();
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