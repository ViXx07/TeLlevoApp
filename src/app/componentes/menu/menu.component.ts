import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {FireLoginService} from 'src/app/servicio/login/fire-login.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  
  constructor(private navCtrl:NavController,
    private location:Location,
    private router: Router,
    private fireLogin: FireLoginService,
    
  ) { }

    perfil: string | null = null;

  ngOnInit() {
    this.perfil = localStorage.getItem('perfil');
  }

  navPagina(page:string) {
    this.router.navigate([page]);
  }

  navVolver() {
    this.location.back();
  }

  async logout(){
    try {
      await this.fireLogin.desconectar;
      localStorage.removeItem("usuario");
      localStorage.removeItem("idUsuario");
      localStorage.removeItem("perfil");
      localStorage.removeItem("nombre");
      this.navCtrl.navigateRoot('/login');
    } catch (error) {
      alert(error);
    }
  }

}
