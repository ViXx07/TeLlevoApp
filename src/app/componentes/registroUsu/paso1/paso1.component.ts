import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.scss'],
})
export class Paso1Component  implements OnInit {
  
  nombre   : string = '';
  apellido : string = '';
  rut      : string = '';

  constructor(private navCtrl : NavController) { }

  @Output() pasoValidado1 = new EventEmitter<boolean>();


  goLogin(){
    this.navCtrl.navigateForward(['/login'])
  }
  validarPaso1(){
    this.pasoValidado1.emit(true);
  }
  ngOnInit() {
  }

}
