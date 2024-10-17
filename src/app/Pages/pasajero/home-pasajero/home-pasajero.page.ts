import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//Importaciones para el mapa 
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home-pasajero',
  templateUrl: './home-pasajero.page.html',
  styleUrls: ['./home-pasajero.page.scss'],
})
export class HomePasajeroPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ionViewWillEnter(){
    if (localStorage.getItem('perfil')==='chofer') {
      this.navCtrl.navigateRoot('home-chofer')
    }
    this.mapa()
  }

  ngOnInit() {
    
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
}
