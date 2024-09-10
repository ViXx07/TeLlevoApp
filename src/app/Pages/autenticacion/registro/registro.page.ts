import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit,OnDestroy   {
  
  constructor(private navCtrl : NavController) { }
  /* Validacion tipo usuario */
  rolSelecionado:string=''
  mostrarPaso: number = 0;
  tipoRegistro:string=''
  
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
  
  ngOnInit() {
    
  }
  ngOnDestroy() {
    this.rolSelecionado='';
    this.mostrarPaso=0;
    this.tipoRegistro='';
  }
  
}
