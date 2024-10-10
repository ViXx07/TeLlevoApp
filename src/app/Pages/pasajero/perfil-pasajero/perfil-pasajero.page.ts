import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pasajero } from 'src/app/model/Pasajero';
import {CrudPasajeroService} from 'src/app/servicio/pasajero/crud-pasajero.service'

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
  usuarioObj: any = '';


  cargandoFlag = false;

  ngOnInit() {
    if (this.jsonUsu !== null) {
      this.cargandoFlag = true;
      this.usuarioObj = JSON.parse(this.jsonUsu);
      this.cargandoFlag = false;
    } else {
      this.navCtrl.navigateForward("/login");
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
