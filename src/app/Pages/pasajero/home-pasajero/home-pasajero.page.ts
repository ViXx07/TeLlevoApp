import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Viaje, viajeVacio } from 'src/app/model/Viaje';
import { CrudChoferService } from 'src/app/servicio/chofer/crud-chofer.service';
import {CrudViajeService} from 'src/app/servicio/viaje/crud-viaje.service'

@Component({
  selector: 'app-home-pasajero',
  templateUrl: './home-pasajero.page.html',
  styleUrls: ['./home-pasajero.page.scss'],
})
export class HomePasajeroPage implements OnInit {

  constructor(private navCtrl: NavController,
              private crudViaje: CrudViajeService,
              private crudChofer: CrudChoferService,
  ) { }

  viajes:Viaje[]=[]
  idPasajero=localStorage.getItem('idUsuario')

  ngOnInit() {
    if (localStorage.getItem('perfil')==='chofer') {
      this.navCtrl.navigateRoot('home-chofer')
    }
    this.listar();
  }


listar() {
  this.crudViaje.listar().subscribe(data => {
      this.viajes = data;
      console.log(this.viajes);
      this.viajes.forEach((viaje) => {
        this.crudChofer.getChofer(viaje.chofer).subscribe( dataChofer =>{
          viaje.chofer= dataChofer.nombre+' '+dataChofer.apellido
        })
      });
    },
    error => {
      console.error('Error al obtener los viajes:', error);
    }
  );
}


}
