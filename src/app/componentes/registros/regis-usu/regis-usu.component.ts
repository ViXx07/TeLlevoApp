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
  errNombre      : boolean | null = null;
  errApellido    : boolean | null = null;
  errRut         : boolean | null = null;
  errGenero      : boolean | null = null;
  errCorreo      : boolean | null = null;
  errNacimiento  : boolean | null = null;
  errContrasena  : boolean | null = null;

  vNombre  () {this.errNombre   = this.usuario.nombre   === '';};
  vApellido() {this.errApellido = this.usuario.apellido === '';};
  vRut   (){
    const regex = /^[0-9]{7,8}[0-9kK]$/i;
    const validar = regex.test(this.usuario.rut);
    if (validar) {
      return this.errRut=false;
    } else {
      return this.errRut=true;
    }
  };
  vGenero(){this.errGenero = this.usuario.genero === ''};
  vCorreo(){
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const validar = regex.test(this.usuario.correoElectronico);
    if (validar) {
      return this.errCorreo=false;
    } else {
      return this.errCorreo=true;
    }
  };
  /* vNacimiento(){this.errNacimiento = this.usuario.fecha_nac === ''} */
  vContrasena() {
    if (this.usuario.contrasena !== '' && this.contrasena2 !== '' && this.usuario.contrasena === this.contrasena2) {
      this.errContrasena=false;
      return true;
    } else {
      this.errContrasena=true;
      return false;
    };
  };
  
  constructor(private navCtrl : NavController,
    private crudPasajero: CrudPasajeroService,
  ) { }
  

  goLogin(){
    this.navCtrl.navigateBack(['/login']);
  }

  validarPaso1(){
    /* Si todos los parametros dan que son '' daran true, por lo cual verifico que sean false para continuar */
    if (this.errNombre===false && this.errApellido===false && this.errRut===false) {
      /* Te manda al paso numero 2 */
      this.mostrarPaso = 2;
    } else {
      /* ejecuta las 3 funciones para revisar si estan completadas y que salte el mensaje de error por estar vacio c: */
      this.vNombre();
      this.vApellido();
      this.vRut();
    } 
  }
  validarPaso2(){
    if (this.errGenero === false && this.errCorreo === false) {
      this.mostrarPaso = 3;
    } else {
      this.vGenero();
      this.vCorreo();
    }
  }
  validarFinal(){
    if (this.vContrasena()) {
      this.grabar();
    } else {
      alert(this.errContrasena)
      this.vContrasena();
    }
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
      this.navCtrl.navigateBack(['/login']);
    }).catch(err => {
      alert(err + " No grabó")
    });
  }



  ngOnInit() {
  }

}
