import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FireLoginService } from 'src/app/servicio/login/fire-login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl : NavController,
              private servicioAuth : FireLoginService,
  ) { }

  email : string = ''
  clave : string = ''
  
  ngOnInit() {
  }

  async Login(){
    if (this.email != '' && this.clave != '') {
      try {
        const aux = await this.servicioAuth.login(this.email,this.clave);
        localStorage.setItem("usuario",this.email);
        this.navCtrl.navigateForward(["/home"]);
      } catch (error) {
        alert(error)
      }
    } else {
      alert("Email o contraseña no existe")
    }
  }

}
