import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds } from '../../models/interfaces/usercreds';
import { AlertController, UrlSerializer } from 'ionic-angular';

@Injectable()
export class AuthProvider {
  
  usuario = null;
  
  constructor(
    public afireauth: AngularFireAuth,
    public alertCtrl: AlertController
    ) {  
  }
    
  login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
        resolve(true);
        this.usuario = true;
      }).catch((err) => {
        let alert = this.alertCtrl.create();
        alert.setTitle('Não logado!');
        alert.setSubTitle("Verifique suas credenciais.");
        alert.addButton({
          text : 'ok',
          handler:data=> {
            credentials.password = "";
          }
        });
        alert.present().then(() => {
        });
        //reject(err);
        this.usuario = null
      });
    });
    return promise;
  }
  
  logado(){
    if (this.usuario == null){
      return false; //----------------------------     descomentar para login sumir botões
      } else {      //----------------------------     descomentar para login sumir botões
      return true;
    }
  }
  
  logout(){
    this.afireauth.auth.signOut();
    this.usuario = null;
    let alert = this.alertCtrl.create();
    console.log(this.afireauth.auth.currentUser.displayName);
    alert.setTitle("Atenção");
    alert.setSubTitle(this.afireauth.auth.currentUser.displayName + ', Logout realizado com sucesso!');
    alert.addButton('Ok');
    alert.present().then(() => {
    });
  }
  
  resetPassword(email) {
    var promise = new Promise((resolve, reject) => {
      this.afireauth.auth.sendPasswordResetEmail(email).then(() => {
        resolve(true);
        let alert = this.alertCtrl.create();
        alert.setTitle("Atenção");
        alert.setSubTitle("Enviado um e-mail para a redefinição de senha!");
        alert.addButton('Ok');
        alert.present().then(() => {
        });
      }).catch((err) => {
        let alert = this.alertCtrl.create();
        alert.setTitle('Erro');
        alert.setSubTitle("Houve um erro no processo de redefinição de senha!");
        alert.addButton('Ok');
        alert.present().then(() => {
        });
        reject(err);
      });
    });
    return promise;
  }
}