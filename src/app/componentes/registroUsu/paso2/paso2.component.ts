import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.scss'],
})
export class Paso2Component  implements OnInit {

  @Output() pasoValidado2 = new EventEmitter<boolean>();

  constructor(private navCtrl : NavController) { }

  goLogin(){
    this.navCtrl.navigateForward(['/login'])
  }

  validarPaso2(){
    this.pasoValidado2.emit(true);
  }

  ngOnInit() {}

}
