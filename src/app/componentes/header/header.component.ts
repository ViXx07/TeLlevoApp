import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() titulo: string = ''; // Propiedad de entrada para el título

  constructor(
    private location:Location,
    private router: Router
  ) { }

  

  ngOnInit() {
    // Nos suscribimos a los cambios de las rutas para actualizar el título dinámicamente
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.tituloPagina(); 
      }
    });
    
  }
  
  navPagina(page:string) {
    this.router.navigate([page]);
  }

  navVolver() {
    this.location.back();
  }

  tituloPagina() {
    const rutaActual = this.router.url;
    switch (rutaActual) {
      case '/crear-viaje':
        this.titulo = 'Crear viaje';
        break;
      case '/misviajes-chofer':
      case '/misviajes-pasajero':
        this.titulo = 'Mis viajes';
        break;
      case '/qr-pasajero':
        this.titulo = 'Generar QR';
        break;
      case '/perfil-pasajero':
      case '/perfil-chofer':
        this.titulo = 'Mi perfil';
        break
      default:
        this.titulo = 'Bienvenido';
    }
  }
}
