import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FireLoginService } from 'src/app/servicio/login/fire-login.service';
import { CrudChoferService } from 'src/app/servicio/chofer/crud-chofer.service';
import { CrudPasajeroService } from 'src/app/servicio/pasajero/crud-pasajero.service';
import { Pasajero } from 'src/app/model/Pasajero';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl : NavController,
              private servicioAuth : FireLoginService,
              private fireChofer : CrudChoferService,
              private firePasajero : CrudPasajeroService,
  ) { }

  email : string = ''
  clave : string = ''
  cargandoFlag = false;
  ngOnInit() {
  }

  async Login(){
    if (this.email != '' && this.clave != '') {
      try {
        const aux = await this.servicioAuth.login(this.email,this.clave);
        if (aux.user) {
          try {
            this.cargandoFlag = true;
            const pasajero = await this.firePasajero.getPasajero(aux.user.uid);
            if (pasajero != undefined) {
              localStorage.setItem("idUsuario",aux.user.uid);
              localStorage.setItem("nombre",pasajero.nombre);
              localStorage.setItem("tipo",'pasajero');
              this.navCtrl.navigateForward(["/home-pasajero"]);
            } else {
              const chofer = await this.fireChofer.getChofer(aux.user.uid);
              if (chofer != undefined) {
                localStorage.setItem("idUsuario",aux.user.uid);
                localStorage.setItem("nombre",chofer.nombre);
                localStorage.setItem("tipo",'pasajero');
                this.navCtrl.navigateForward(["/home-chofer"]);
              }
            }
            this.cargandoFlag=false;
          } catch (error) {
            Swal.fire({
              icon:'error',
              title: 'Hubo un error!',
              text: 'Error al logear tu usuario ;C',
              confirmButtonText: 'Reintentar',
              heightAuto: false
            })
          }
        }
      } catch (error) {
        Swal.fire({
          icon:'question',
          title: 'Usuario o contraseña inválida',
          confirmButtonText: 'Reintentar',
          heightAuto: false
        })
      }
    } else {
      Swal.fire({
        icon:'question',
        title: 'Usuario o contraseña inválida!',
        confirmButtonText: 'Reintentar',
        heightAuto: false
      })
    }
  }

}
