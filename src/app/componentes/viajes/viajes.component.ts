import { Component, Input, input, OnInit, output } from '@angular/core';
import {CrudViajeService} from 'src/app/servicio/viaje/crud-viaje.service'

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
})
export class ViajesComponent  implements OnInit {

  @Input() destino:string = '';
  @Input() hora:string = '';
  @Input() fecha:string = '';
  @Input() monto:string = '';
  @Input() chofer:string = '';
  @Input() idViaje:string = '';
  @Input() idUsuario:string|null= '';
  
  constructor(private crudViaje:CrudViajeService) { }

  ngOnInit() {}

  async soliViaje(){
    try {
      const aux = await this.crudViaje.agregarAlViaje(this.idViaje,this.idUsuario||'')
      alert("exitoso")
    } catch (error) {
      alert("error")
    }
  }

}
