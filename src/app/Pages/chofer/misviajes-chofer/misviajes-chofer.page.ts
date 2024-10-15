import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-misviajes-chofer',
  templateUrl: './misviajes-chofer.page.html',
  styleUrls: ['./misviajes-chofer.page.scss'],
})
export class MisviajesChoferPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
    if (localStorage.getItem('perfil')==='pasajero') {
      this.navCtrl.navigateRoot('misviajes-pasajero')
    }
  }

}
