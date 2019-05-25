import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';
import { Associado, PessoaFisica } from '../../models/Associado';


@Injectable()
export class AssociadoProvider {
  ref = firebase.database().ref('Associados/');
  associados = [];
  associado : Associado;
  pessoaFisica : PessoaFisica;

  constructor(public http: HttpClient) {
  }

  listar(){
    return this.ref.once('value') 
      .then(
      resp => snapshotToArray(resp)
      );

  }
  gravar(associado, id = null){
    if (!id) {
      let newAssociado = this.ref.push();
      newAssociado.set(associado);
    }else {
      let newAssociado = firebase.database().ref(`Associados/${id}`);
      newAssociado.update(associado);
    }
  }

  excluir(id){
    firebase.database().ref('Associados/'+id).remove();
  }

  listarPorId(id){
    return firebase.database().ref(`Associados/${id}`).once('value')
      .then(
        resp => snapshotToObject(resp)
      );
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