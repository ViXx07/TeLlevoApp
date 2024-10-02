import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-regis-usu',
  templateUrl: './regis-usu.component.html',
  styleUrls: ['./regis-usu.component.scss'],
})
export class RegisUsuComponent  implements OnInit {
  mostrarPaso       : number = 1 ;

  usuario = {
    nombre: '',
    apellido: '',
    rut: '',
    genero: '',
    correoElectronico: '',
    contrasena1: '',
    contrasena2: '',
    selectedDate: null as Date | null
  };




  constructor(private navCtrl : NavController) { }
  
  goLogin(){
    this.navCtrl.navigateBack(['/login']);
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
