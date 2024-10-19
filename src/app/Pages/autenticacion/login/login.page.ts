import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FireLoginService } from 'src/app/servicio/login/fire-login.service';
import { CrudChoferService } from 'src/app/servicio/chofer/crud-chofer.service';
import { CrudPasajeroService } from 'src/app/servicio/pasajero/crud-pasajero.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private servicioAuth: FireLoginService,
    private fireChofer: CrudChoferService,
    private firePasajero: CrudPasajeroService
  ) {}

  email: string = '';
  clave: string = '';
  cargandoFlag = false;
  ngOnInit() {}

  async Login() {
    this.cargandoFlag = true;
    if (this.email != '' && this.clave != '') {
      try {
        const aux = await this.servicioAuth.login(this.email, this.clave);

        // Verifica si aux.user es válido
        if (aux.user) {
          const id = aux.user.uid;
          try {
            const pasajero = await this.firePasajero.getPasajero(aux.user.uid);
            if (pasajero != undefined) {
              localStorage.setItem('usuario', JSON.stringify(pasajero));
              localStorage.setItem('idUsuario', id);
              localStorage.setItem('perfil', 'pasajero');
              localStorage.setItem('nombre', 'nombre');
              this.navCtrl.navigateForward(['/home-pasajero']);
            } else {
              await this.fireChofer
                .getChofer(aux.user.uid)
                .subscribe((data) => {
                  var chofer = data;
                  localStorage.setItem('usuario', JSON.stringify(chofer));
                  localStorage.setItem('idUsuario', id);
                  localStorage.setItem('perfil', 'chofer');
                  localStorage.setItem('nombre', 'nombre');
                  this.navCtrl.navigateForward(['/home-chofer']);
                });
            }
            this.email = '';
            this.clave = '';
          } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Hubo un error!',
              text: 'Error al logear tu usuario ;C',
              confirmButtonText: 'Reintentar',
              heightAuto: false,
            });
          }
        } else {
          // Manejo del caso en que aux.user es null o undefined
          Swal.fire({
            icon: 'question',
            title: 'Usuario o contraseña inválida',
            confirmButtonText: 'Reintentar',
            heightAuto: false,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'question',
          title: 'Usuario o contraseña inválida',
          confirmButtonText: 'Reintentar',
          heightAuto: false,
        });
      }
    } else {
      Swal.fire({
        icon: 'question',
        title: 'Usuario o contraseña inválida!',
        confirmButtonText: 'Reintentar',
        heightAuto: false,
      });
    }
    this.cargandoFlag = false;
  }
}
