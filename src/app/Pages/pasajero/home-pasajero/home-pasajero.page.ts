import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Viaje, viajeVacio } from 'src/app/model/Viaje';
import { CrudChoferService } from 'src/app/servicio/chofer/crud-chofer.service';
import {CrudViajeService} from 'src/app/servicio/viaje/crud-viaje.service'
//Importaciones para el mapa 
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';


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

  ionViewWillEnter(){
    if (localStorage.getItem('perfil')==='chofer') {
      this.navCtrl.navigateRoot('home-chofer')
    }
  }

}
