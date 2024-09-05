import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  constructor(private navCtrl : NavController) { }
  /* Validacion tipo usuario */
  rolSelecionado:string=''
  mostrarPaso: number = 2;
  tipoRegistro:string=''
  /* Funciones de seleccionar tipo usuario */
  seleccionado(role: string){
    this.rolSelecionado = role;
  }
  isSelected(role: string): boolean {
    return this.rolSelecionado === role;
  }
  validarClase(){
  if (this.rolSelecionado == '') {
    alert('Seleccione un tipo de usuario')
  } else {
    this.mostrarPaso = 1;
    this.tipoRegistro = this.rolSelecionado;
  }
  }

  goPaso1(){
    if (this.mostrarPaso>1) {
      this.mostrarPaso = 1;
    }
  }
  goPaso2(){
    if (this.mostrarPaso>2) {
      this.mostrarPaso = 2;
    }
  }






  /* Booleano pasos */
  /*  */
  /* metodos capturadores */
  onPasoValidado1(value:boolean){
    if (value) {
      this.mostrarPaso = 2;
    }
  }
  onPasoValidado2(value:boolean){
    if (value) {
      this.mostrarPaso = 3;
    }
  }
  /*  */

  /* Variable seleccionador de tipo cuenta */
  /*  */


  nombre: string = ''


  goLogin(){
    this.navCtrl.navigateForward(['/login'])
  }











  
  ngOnInit() {

  }

}
