import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-recupera-password',
  templateUrl: './recupera-password.page.html',
  styleUrls: ['./recupera-password.page.scss'],
})
export class RecuperaPasswordPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  mostrarPaso : number = 1 ;
  correo      : string = '';

  validarPaso1(){
    this.mostrarPaso=2
  }
  validarPaso2(){
    this.mostrarPaso=3
  }
  validarPaso3(){
    alert("Clave recuperada con éxito")
    this.navCtrl.navigateRoot(['/login'])
  }

  ngOnInit() {
  }

}
