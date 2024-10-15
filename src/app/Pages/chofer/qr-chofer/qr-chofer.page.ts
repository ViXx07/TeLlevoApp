import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr-chofer',
  templateUrl: './qr-chofer.page.html',
  styleUrls: ['./qr-chofer.page.scss'],
})
export class QrChoferPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
    if (localStorage.getItem('perfil')==='pasajero') {
      this.navCtrl.navigateRoot('qr-pasajero')
    }
  }

}
