import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

@Injectable()
export class FeedNoticiaProvider {

  noticias = [];
  ref = firebase.database().ref('Noticias/');

  constructor(public http: HttpClient) {
  }

  listar(){
    return this.ref.once('value')
    .then(
      resp => snapshotToArray(resp)
    );
  }

}
export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.guid = childSnapshot.guid;
      returnArr.push(item);
  });
  return returnArr;
}