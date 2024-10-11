import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/Viaje';
import { CrudViajeService } from 'src/app/servicio/viaje/crud-viaje.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {
  viaje: Viaje = {destino:'', hora_inicio: null , punto_encuentro:'', valor: null}

  constructor(private crud:CrudViajeService) { }

  ngOnInit() {
  }

  grabar(){
    this.crud.grabar(this.viaje).then(()=>{
      alert('Viaje registrado')
    }).catch((err)=>{
      console.log("error:", err)
    })
  }
}
