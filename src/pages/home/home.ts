import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'Firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  infos = [];
  ref = firebase.database().ref('Info/');

  constructor(public navCtrl: NavController
    ) {
      this.ref.on('value', resp => {
        this.infos = [];
        this.infos = snapshotToArray(resp);
        console.log(this.infos);
      })
  }

  novoInfo() {
    this.navCtrl.push('FormInfoPage');
  }

  edit(key) {
    this.navCtrl.push('FormInfoPage', {id: key});
  }

  async delete(key) {
    firebase.database().ref('Info/'+key).remove();
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
