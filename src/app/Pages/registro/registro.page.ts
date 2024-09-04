import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  rolSelecionado:string=''

  constructor() { }

  seleccionado(role: string){
    this.rolSelecionado = role;
  }
  isSelected(role: string): boolean {
    return this.rolSelecionado === role;
  }

  ngOnInit() {

  }

}
