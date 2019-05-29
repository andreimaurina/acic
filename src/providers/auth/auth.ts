import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds } from '../../models/interfaces/usercreds';

@Injectable()
export class AuthProvider {

  usuario = null;

  constructor(public afireauth: AngularFireAuth) {
    
  }

  login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
        resolve(true);
        alert("Você logou no sistema!");
        this.usuario = 1
      }).catch((err) => {
        alert("Não logado!");
        reject(err);
        this.usuario = null
       })
    })
    return promise;
  }

  logado(){
    if (this.usuario == null){
      return false;
    }else{
      return true;
    }
  }
}
