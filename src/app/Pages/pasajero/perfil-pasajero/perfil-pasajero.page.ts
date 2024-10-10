import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PasajeroVacio } from 'src/app/model/Pasajero';
import {CrudPasajeroService} from 'src/app/servicio/pasajero/crud-pasajero.service'
/* import sweetaler2 */

@Component({
  selector: 'app-perfil-pasajero',
  templateUrl: './perfil-pasajero.page.html',
  styleUrls: ['./perfil-pasajero.page.scss'],
})
export class PerfilPasajeroPage implements OnInit {

  constructor(private CrudPasajero : CrudPasajeroService,
              private navCtrl: NavController,
  ) { }
  
  jsonUsu = localStorage.getItem("usuario");

  pasajero = PasajeroVacio();

  
  modFlag = true;
  cargandoFlag = false;

  ngOnInit() {
    if (this.jsonUsu !== null) {
      this.cargandoFlag = true;
      this.pasajero = JSON.parse(this.jsonUsu);
      this.cargandoFlag = false;
    } else {
      this.navCtrl.navigateForward("/login");
    }
  }

  modificando(){this.modFlag=true};

  async confirmMod(){
    try {
      await this.CrudPasajero.modificarPasajero(this.pasajero)
      this.jsonUsu = JSON.stringify(this.pasajero);
      localStorage.setItem("usuario", this.jsonUsu);
      this.pasajero = JSON.parse(this.jsonUsu);
      this.modFlag=false;
    } catch (error) {
      alert(error)
    }
  }

/*   async recibirPasajero(){
    try {
      this.cargandoFlag=true;
      this.pasajero = await this.CrudPasajero.getPasajero(this.usuario);
      console.log(this.pasajero)
      this.nombre = this.pasajero.nombre
      this.nombreCompleto = this.pasajero.nombre + ' ' + this.pasajero.apellido 
      this.cargandoFlag=false;
      } catch (error) {
        alert(error)
      }
  } */


  
  

}
