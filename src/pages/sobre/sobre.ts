import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { SobreProvider } from '../../providers/sobre/sobre';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  
  SwipedTabsIndicator :any= null;
  tabs:any=[];
  
  sobres = [];
  admin = false;
  editando = false;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: SobreProvider,
    public auth: AuthProvider,
    ) {
      this.tabs=["História","Visão","Missão","Diretoria"];
    }
    
    ionViewDidEnter() {
      this.SwipedTabsIndicator = document.getElementById("indicator");
    }
    
    selectTab(index) {    
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
      this.SwipedTabsSlider.slideTo(index, 500);
    }
    
    updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
      if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
      {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
      }
      
    }
    
    animateIndicator($event) {
      if(this.SwipedTabsIndicator)
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
    }
    
    chamaListar(){
      this.provedor.listar()
      .then(
        data => this.sobres = data
        );
      }
      
      ionViewWillEnter(){
        this.admin = this.auth.logado();
        this.chamaListar();
      }
      
      editar(status){
        this.editando = status;
      }
      
      gravar(id){
        this.provedor.gravar(this.sobres[0],id);
        this.editando = false ; 
      }
      
    }