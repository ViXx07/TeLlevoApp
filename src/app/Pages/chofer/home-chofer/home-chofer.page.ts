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

  ionViewWillEnter(){
    if (localStorage.getItem('perfil')==='pasajero') {
      this.navCtrl.navigateRoot('home-pasajero')
    }
    this.mapa() 
  }
  
  ngOnInit():void {
    

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
