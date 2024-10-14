import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() titulo: string = ''; // Propiedad de entrada para el título

  mostrar: Boolean = false; 
  jsonUsu = localStorage.getItem('usuario')
  usuario2 : Usuario | null = null;  
  

  constructor(
    private location:Location,
    private router: Router
  ) { }
  

  ngOnInit() {
    // Nos suscribimos a los cambios de las rutas para actualizar el título dinámicamente
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.tituloPagina(); 
        this.esconderBtnVolver(); 
        this.mostrarUsuario();
      }

    });
    
    this.esconderBtnVolver();
    this.mostrarUsuario();
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
      case '/qr-chofer':
        this.titulo = 'Generar QR';
        break;  
      case '/qr-pasajero':
        this.titulo = 'Leer QR';
        break;
      case '/perfil-pasajero':
      case '/perfil-chofer':
        this.titulo = 'Mi perfil';
        break
      case '/mod-viaje':
        this.titulo = 'Modicar viaje';
        break
      default:
        this.titulo = 'Bienvenid@';
    }
  }


  esconderBtnVolver(){
    const rutaActual = this.router.url;
    if (rutaActual === "/home-chofer" || rutaActual === "/home-pasajero") {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
    return this.mostrar;
  }

  mostrarUsuario() {
    const rutaActual = this.router.url;
    if (rutaActual === '/home-chofer' || rutaActual === '/home-pasajero') {
      if (this.jsonUsu != null) {
        this.usuario2 = JSON.parse(this.jsonUsu);
      } else {
        this.usuario2 = null;
      }
    } 
    
    
  }

}
