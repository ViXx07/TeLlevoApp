import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  /* Booleano pasos */
  mostrarPaso: number = 1;
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
  rolSelecionado:string=''
  nombre: string = ''

  constructor(private navCtrl : NavController) { }

  goLogin(){
    this.navCtrl.navigateForward(['/login'])
  }

  /* Funciones de seleccionar tipo usuario */
  seleccionado(role: string){
    this.rolSelecionado = role;
  }
  isSelected(role: string): boolean {
    return this.rolSelecionado === role;
  }
  
  ngOnInit() {

  }

}
