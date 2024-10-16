import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Viaje, viajeVacio } from 'src/app/model/Viaje';
import {CrudViajeService} from 'src/app/servicio/viaje/crud-viaje.service'

@Component({
  selector: 'app-home-pasajero',
  templateUrl: './home-pasajero.page.html',
  styleUrls: ['./home-pasajero.page.scss'],
})
export class HomePasajeroPage implements OnInit {

  constructor(private navCtrl: NavController,
              private crudViaje: CrudViajeService,
  ) { }

  viajes:Viaje[]=[]
  

  ngOnInit() {
    if (localStorage.getItem('perfil')==='chofer') {
      this.navCtrl.navigateRoot('home-chofer')
    }
    this.listar();
  }

  listar(){
    this.crudViaje.listar().subscribe(data =>{this.viajes = data})
    console.log(this.viajes)
  }



}
