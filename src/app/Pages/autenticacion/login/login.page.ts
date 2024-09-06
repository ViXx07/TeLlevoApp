import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  usuario : string = ''
  clave : string = ''
  
  ngOnInit() {
  }

  Login(){
    if (this.usuario != '' && this.clave != '') {
      alert("Hiciste login redirecciona c:")
    } else {
      alert("Usuario o contraseña no existe")
    }
  }

}
