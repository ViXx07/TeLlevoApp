import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pasajero } from 'src/app/model/Pasajero';
import { CrudPasajeroService } from 'src/app/servicio/pasajero/crud-pasajero.service';

@Component({
  selector: 'app-regis-usu',
  templateUrl: './regis-usu.component.html',
  styleUrls: ['./regis-usu.component.scss'],
})
export class RegisUsuComponent  implements OnInit {
  mostrarPaso       : number = 1 ;
  contrasena2: string = '';
  
  
  usuario : Pasajero = {
    rut: '',
    nombre: '',
    apellido: '',
    correoElectronico: '',
    genero: '',
    fecha_nac: null,
    contrasena: '',
    tipo: 'pasajero',
  };
  
  /* bool manejo imputs */
  errNombre      : boolean = false;
  errApellido    : boolean = false;
  errRut         : boolean = false;
  errCorreo      : boolean = false;
  errGenero      : boolean = false;
  errNacimiento  : boolean = false;
  errContrasena  : boolean = false;
  errContrasena2 : boolean = false;
  vNombre(){this.errNombre = this.usuario.nombre === '';}
  vApellido(){this.errApellido = this.usuario.apellido === ''}
  vRut   (){this.errRut    = this.usuario.rut    === ''}
  vCorreo(){this.errCorreo = this.usuario.correoElectronico === ''}
  vGenero(){this.errGenero = this.usuario.genero === ''}
  /* vNacimiento(){this.errNacimiento = this.usuario.fecha_nac === ''} */
  vContrasena(){this.errContrasena = this.usuario.contrasena === ''}
  vcontrasena2(){this.errContrasena2 = this.contrasena2 === ''}
  
  constructor(private navCtrl : NavController,
    private crudPasajero: CrudPasajeroService,
  ) { }
  

  goLogin(){
    this.navCtrl.navigateBack(['/login']);
  }
  validarPaso1(){

    if (!this.errNombre && !this.errApellido && !this.errRut) {
      alert(this.errNombre)
    } else {
      this.mostrarPaso = 2;
    } 
  }
  validarPaso2(){
    this.mostrarPaso = 3;
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


  /* CRUD */

  grabar(){
    this.crudPasajero.grabarPasajero(this.usuario).then(()=>{
      alert("grabó");
    }).catch(err => {
      alert(err + " No grabó")
    });
  }



  ngOnInit() {
  }

}
