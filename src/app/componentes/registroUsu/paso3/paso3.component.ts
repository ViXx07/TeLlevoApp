import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.scss'],
})
export class Paso3Component  implements OnInit {
  contrasena1 : string = ''  
  contrasena2 : string = ''
  constructor(private navCtrl : NavController) { }

  goLogin(){
    this.navCtrl.navigateForward(['/login'])
  }

  crearCuenta(){
    
    if (this.contrasena1 != this.contrasena2 || this.contrasena1=='') {
      
    } else {
      alert("son iguales")
    }
  }


  ngOnInit() {}

}
