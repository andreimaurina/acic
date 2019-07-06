import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercreds';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;
  public type = 'password';
  public showPass = false;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authservice: AuthProvider,
    public alertCtrl: AlertController
    ) {
    }
    
    togglePassword(){
      this.showPass = !this.showPass;
      if(this.showPass){
        this.type = 'text';
      } else {
        this.type = 'password';
      }
    }
    
    signIn() {
      if (this.credentials.email == null){
        let alert = this.alertCtrl.create();
        alert.setTitle('Erro');
        alert.setSubTitle("E-mail não preenchido!");
        alert.addButton({
          text : 'ok',
          handler:data=> {
            this.credentials.password = "";
          }
        });
        alert.present().then(() => {
        });
      } else if (this.credentials.password == null || this.credentials.password == ""){
        let alert = this.alertCtrl.create();
        alert.setTitle('Erro');
        alert.setSubTitle("Senha não preenchida!");
        alert.addButton('Ok');
        alert.present().then(() => {
        });
      }else{
        this.authservice.login(this.credentials).then((res: any) => {
        if (!res.code)
          this.navCtrl.pop();
        else
          alert(res);
        });
      }
    }

    resetPassword(){
      this.navCtrl.push('ResetPasswordPage');
    }

  }