import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  rolSelecionado:string=''

  constructor(private navCtrl : NavController) { }

  goLogin(){
    this.navCtrl.navigateForward(['/login'])
  }

  seleccionado(role: string){
    this.rolSelecionado = role;
  }
  isSelected(role: string): boolean {
    return this.rolSelecionado === role;
  }

  ngOnInit() {

  }

}
