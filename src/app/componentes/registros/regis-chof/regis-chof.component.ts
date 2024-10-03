import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Chofer } from 'src/app/model/Chofer';
import { CrudChoferService } from 'src/app/servicio/chofer/crud-chofer.service';
@Component({
  selector: 'app-regis-chof',
  templateUrl: './regis-chof.component.html',
  styleUrls: ['./regis-chof.component.scss'],
})
export class RegisChofComponent  implements OnInit {
  constructor(private navCtrl : NavController,
              private crudChofer: CrudChoferService,
  ) { }
  
  mostrarPaso       : number = 1 ;
  contrasena2       : string = '';

  usuario : Chofer ={
    rut: '',
    nombre: '',
    apellido: '',
    correoElectronico: '',
    genero: '',
    fecha_nac: null,
    contrasena: '',
    modelo : '',
    patente : '',
    tipo: 'chofer',
  }
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
  /* listo */
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
  /* listo */
  validarPaso2(){
    if (this.errGenero === false && this.errCorreo === false) {
      this.mostrarPaso = 3;
    } else {
      this.vGenero();
      this.vCorreo();
    }
  }
  /* revisar algo raro debe tener */
  validarPaso3(){}
  /* revisar */
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
  goPaso3(){
    if (this.mostrarPaso>3) {
      this.mostrarPaso = 3;
    }
  }

  grabar(){
    this.crudChofer.grabarChofer(this.usuario).then(()=>{
      alert("grabó");
    }).catch(err => {
      alert(err + " No grabó")
    });
  }

  ngOnInit() {
  }
}
