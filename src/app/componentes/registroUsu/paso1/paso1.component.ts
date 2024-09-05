import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.scss'],
})
export class Paso1Component  implements OnInit {
  
  nombre   : string = '';
  apellido : string = '';
  rut      : string = '';

  constructor(private navCtrl : NavController) { }


  mostrarPaso : number = 1 ;
  contrasena1 : string = '';
  contrasena2 : string = '';
  correoElectronico : string = '';

  goLogin(){
    this.navCtrl.navigateForward(['/login']);
  }
  validarPaso1(){
    this.mostrarPaso = 2;
  }
  validarPaso2(){
    this.mostrarPaso = 3;
  }
  crearCuenta(){

  }

  goPaso1(){
    if (this.mostrarPaso>1) {
      this.mostrarPaso = 1;
    }
  }
  goPaso2(){
    if (this.mostrarPaso>2) {
      this.mostrarPaso = 2;
    }
  }


  ngOnInit() {
  }

}
