import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//Importaciones para el mapa 
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-chofer',
  templateUrl: './home-chofer.page.html',
  styleUrls: ['./home-chofer.page.scss'],
})
export class HomeChoferPage implements OnInit {
  constructor(private navCtrl: NavController,) { }

  ngOnInit():void {
    if (localStorage.getItem('perfil')==='pasajero') {
      this.navCtrl.navigateRoot('home-pasajero')
    }
    this.mapa() 

  }

  mapa(){
    //var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    //mapboxgl.accessToken = environment.MAPBOX_ACCESS_TOKEN;
    
    var map = new mapboxgl.Map({

      accessToken: environment.MAPBOX_ACCESS_TOKEN,
      container: 'mapa-box',
      style: 'mapbox://styles/mapbox/light-v10',
      center:[-33.59846466294888, -70.57880159991507],
      zoom:12,
      collectResourceTiming: false,
    });
  }

}
