import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//Importaciones para el mapa 
import * as mapboxgl from 'mapbox-gl';
import { Viaje, viajeVacio } from 'src/app/model/Viaje';
import { CrudChoferService } from 'src/app/servicio/chofer/crud-chofer.service';
import { CrudViajeService } from 'src/app/servicio/viaje/crud-viaje.service';
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

  ionViewWillEnter(){
    if (localStorage.getItem('perfil')==='chofer') {
      this.navCtrl.navigateRoot('home-chofer')
    }
    this.mapa()
  }


  mapa(){
    var map = new mapboxgl.Map({

      accessToken: environment.MAPBOX_ACCESS_TOKEN,
      container: 'mapa-box',
      style: 'mapbox://styles/mapbox/streets-v12',
      center:[ -70.57880159991507,-33.59846466294888],
      zoom:16,
      collectResourceTiming: false,
    });
  }
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
