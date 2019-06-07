import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'Firebase';

@Injectable()
export class SobreProvider {

  sobres = [];
  ref = firebase.database().ref('Sobre/');

  constructor(public http: HttpClient) {
  }

  listar(){
    return this.ref.once('value')
      .then(
        resp => snapshotToArray(resp)
      );
  }

  gravar(sobre,id){
    let newSobre = firebase.database().ref(`Sobre/${id}`);
    newSobre.update(sobre);
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