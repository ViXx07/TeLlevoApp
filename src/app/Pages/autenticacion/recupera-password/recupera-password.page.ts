import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FireLoginService } from 'src/app/servicio/login/fire-login.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-recupera-password',
  templateUrl: './recupera-password.page.html',
  styleUrls: ['./recupera-password.page.scss'],
})
export class RecuperaPasswordPage implements OnInit {
  cargandoFlag = false;
  mostrarPaso : number = 1 ;
  correo : string = ''

  constructor(private navCtrl : NavController,
              private autenticacion : FireLoginService,
  ) { }
  
  ngOnInit() {
  }


  async enviarCorreo(){
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const validar = regex.test(this.correo);
    if (validar) {
      try {
        const aux = await this.autenticacion.recuperarContrasena(this.correo);
        Swal.fire({
          icon:'success',
          title: 'Correo enviado C:',
          confirmButtonText: 'Ok',
          heightAuto: false
        }).then(()=>{this.navCtrl.navigateForward(['/login'])});
      } catch (error) {
        Swal.fire({
          icon:'error',
          title: 'Ingrese correo electrónico válido',
          confirmButtonText: 'Reintentar',
          heightAuto: false
        })
      }
    } else {
      Swal.fire({
        icon:'question',
        title: 'Ingrese correo electrónico',
        confirmButtonText: 'Reintentar',
        heightAuto: false
      })
    }
  }




/*   validarPaso1(){
    this.mostrarPaso=2
  }
  validarPaso2(){
    this.mostrarPaso=3
  }
  validarPaso3(){
    alert("Clave recuperada con éxito")
    this.navCtrl.navigateRoot(['/login'])
  } */







}
