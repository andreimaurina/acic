import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

@Injectable()
export class BeneficioProvider {

  beneficios = [];
  ref = firebase.database().ref('Beneficios/');

  constructor(public http: HttpClient) {
  }

  listar(){
    return this.ref.orderByChild("nome").once('value')
      .then(
        resp => snapshotToArray(resp)
      );
  }

  listarPorId(id){
    return firebase.database().ref(`Beneficios/${id}`).once('value')
      .then(
        resp => snapshotToObject(resp)
      );
  }

  gravar(beneficio, id = null){
    if (!id) {
      let newBeneficio = this.ref.push();
      return newBeneficio.set(beneficio);
    }else {
      let newBeneficio = firebase.database().ref(`Beneficios/${id}`);
      return newBeneficio.update(beneficio);
    }
  }

  excluir(id){
    return firebase.database().ref('Beneficios/'+id).remove();
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