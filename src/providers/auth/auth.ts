import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds } from '../../models/interfaces/usercreds';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AuthProvider {

  usuario = null;

  constructor(
    public afireauth: AngularFireAuth,
    public alerCtrl: AlertController
    ) {
    
  }

  login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
        resolve(true);
        this.usuario = 1
      }).catch((err) => {
        //alert("Não logado! "  + "\n" + "Verifique suas credenciais...");
        let alert = this.alerCtrl.create();
        alert.setTitle('Não logado! <br> Verifique suas credenciais...');
        alert.addButton('Ok');
        alert.present().then(() => {
          });
        //reject(err);
        this.usuario = null
       })
    })
    return promise;
  }

  logado(){
    if (this.usuario == null){
       return false;
    } else {
      return true;
    }
  }
}
