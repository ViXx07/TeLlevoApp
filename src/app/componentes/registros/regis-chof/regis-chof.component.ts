import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-regis-chof',
  templateUrl: './regis-chof.component.html',
  styleUrls: ['./regis-chof.component.scss'],
})
export class RegisChofComponent  implements OnInit {
  constructor(private navCtrl : NavController) { }
  
  mostrarPaso       : number = 1 ;

  nombre            : string = '';
  apellido          : string = '';
  rut               : string = '';
  
  genero            : string = '';
  correoElectronico : string = '';
  
  modelo            : string = '';
  patente           : string = '';
  
  contrasena1       : string = '';
  contrasena2       : string = '';
  

  validarPaso1(){
    this.mostrarPaso = 2;
  }
  validarPaso2(){
    this.mostrarPaso = 3;
  }
  validarPaso3(){
    this.mostrarPaso = 4;
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
  goPaso3(){
    if (this.mostrarPaso>3) {
      this.mostrarPaso = 3;
    }
  }


  ngOnInit() {
  }
}
