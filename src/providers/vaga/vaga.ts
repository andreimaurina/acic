import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

@Injectable()
export class VagaProvider {

  vagas = [];
  ref = firebase.database().ref('Vagas/');

  constructor(public http: HttpClient) {
  }
  
  candidatarSe(vagas){

  }

  listar(){
    return this.ref.once('value')
      .then(
        resp => snapshotToArray(resp)
      );
  }

  listarPorId(id){
    return firebase.database().ref(`Vagas/${id}`).once('value')
      .then(
        resp => snapshotToObject(resp)
      );
  }

  gravar(vaga, id = null){
    if (!id) {
      let newVaga = this.ref.push();
      return newVaga.set(vaga);
    }else {
      let newVaga = firebase.database().ref(`Vagas/${id}`);
      return newVaga.update(vaga);
    }
  }

  excluir(id){
    firebase.database().ref('Vagas/'+id).remove();
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