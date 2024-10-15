import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-chofer',
  templateUrl: './home-chofer.page.html',
  styleUrls: ['./home-chofer.page.scss'],
})
export class HomeChoferPage implements OnInit {
  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
    if (localStorage.getItem('perfil')==='pasajero') {
      this.navCtrl.navigateRoot('home-pasajero')
    }
  }

}
