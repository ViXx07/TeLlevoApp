import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr-pasajero',
  templateUrl: './qr-pasajero.page.html',
  styleUrls: ['./qr-pasajero.page.scss'],
})
export class QrPasajeroPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    if (localStorage.getItem('perfil')==='chofer') {
      this.navCtrl.navigateRoot('qr-chofer')
    }
  }

}
