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

  goRegistro(){
    this.navCtrl.navigateForward(['/registro']);
  }

  Login(){
    if (this.usuario != '' && this.clave != '') {
      localStorage.setItem("usuario",this.usuario)
      console.log("usuario guardado");
      this.navCtrl.navigateForward(["/home"]);
    } else {
      alert("Usuario o contraseña no existe")
    }
  }

}
