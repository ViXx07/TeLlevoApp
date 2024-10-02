import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { CrudUsuarioService } from 'src/app/servicio/usuario/crud-usuario.service';

@Component({
  selector: 'app-regis-usu',
  templateUrl: './regis-usu.component.html',
  styleUrls: ['./regis-usu.component.scss'],
})
export class RegisUsuComponent  implements OnInit {
  mostrarPaso       : number = 1 ;
  contrasena2: string = '';

  usuario : Usuario = {
    rut: '',
    nombre: '',
    apellido: '',
    correoElectronico: '',
    genero: '',
    fecha_nac: null,
    contrasena: '',
  };




  constructor(private navCtrl : NavController,
              private crudUsuario: CrudUsuarioService,
  ) { }
  
  goLogin(){
    this.navCtrl.navigateBack(['/login']);
  }
  validarPaso1(){
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
    this.crudUsuario.grabar(this.usuario).then(()=>{
      alert("grabó");
    }).catch(err => {
      alert(err + " No grabó")
    });
  }



  ngOnInit() {
  }

}
