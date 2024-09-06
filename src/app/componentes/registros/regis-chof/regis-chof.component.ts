import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-regis-chof',
  templateUrl: './regis-chof.component.html',
  styleUrls: ['./regis-chof.component.scss'],
})
export class RegisChofComponent  implements OnInit {
  nombre            : string = '';
  apellido          : string = '';
  rut               : string = '';
  genero            : string = '';
  mostrarPaso       : number = 1 ;
  contrasena1       : string = '';
  contrasena2       : string = '';
  correoElectronico : string = '';

  constructor(private navCtrl : NavController) { }
  
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
