import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'Firebase';

/*
  Generated class for the SobreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SobreProvider {

  sobre = [];
  ref = firebase.database().ref('Sobre/');

  constructor(public http: HttpClient) {
  }

  


  gravar(sobre, id ){
  
      let newEvento = firebase.database().ref(`Sobre/${id}`);
      newEvento.update(sobre);
    
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
