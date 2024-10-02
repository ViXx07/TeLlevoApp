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

  constructor(private navCtrl : NavController,
              private crudPasajero: CrudPasajeroService,
  ) { }
  
  goLogin(){
    this.navCtrl.navigateBack(['/login']);
  }
  validarPaso1(){
    if (this.usuario.nombre!='') {
    
    } else {
      
    }
    this.mostrarPaso = 2;
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
