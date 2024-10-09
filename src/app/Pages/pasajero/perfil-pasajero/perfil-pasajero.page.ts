import { Component, OnInit } from '@angular/core';
import {CrudPasajeroService} from 'src/app/servicio/pasajero/crud-pasajero.service'
@Component({
  selector: 'app-perfil-pasajero',
  templateUrl: './perfil-pasajero.page.html',
  styleUrls: ['./perfil-pasajero.page.scss'],
})
export class PerfilPasajeroPage implements OnInit {

  constructor(private CrudPasajero : CrudPasajeroService) { }
  
  usuario = localStorage.getItem("idUsuario");
  pasajero : any;
  nombre : string = '';
  nombreCompleto : string = '';
  cargandoFlag = false;

  ngOnInit() {
    this.recibirPasajero()
    console.log(this.usuario);
  }

  async recibirPasajero(){
    if (this.usuario !== null) {
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
    } else {
      alert("usuario vacio no hay id :C")
    }
  }

  
  

}
