import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  titulo: string = 'Bienvenido';

  constructor(
    private location:Location,
    private navCtrl:NavController,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Nos suscribimos a los cambios de las rutas para actualizar el título dinámicamente
    this.router.events.subscribe(() => {
      if (event instanceof NavigationEnd) {
        this.tituloPagina(); // Llamamos al método para establecer el título según la ruta actual
      } 
      
    });
  }

  navPagina(page:string) {
    this.navCtrl.navigateForward(page);
  }

  navVolver() {
    this.location.back();
  }

  tituloPagina() {
    const rutaActual = this.router.url;
    switch(rutaActual) {
      case "/crear-viaje":
        this.titulo = "Crear viaje";
        break;
      case "/misviajes-chofer":
      case "/misviajes-pasajero":
        this.titulo = "Mis viajes";
        break;
      case "/qr-pasajero":
        this.titulo = "Generar QR";
        break;
      default:
        this.titulo = "Bienvenido";
    }
  }
}
