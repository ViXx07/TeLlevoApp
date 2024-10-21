import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Viaje,viajeVacio } from 'src/app/model/Viaje';
import { CrudViajeService } from 'src/app/servicio/viaje/crud-viaje.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {
  viaje = viajeVacio();
  direccion: string = '';

  constructor(private crud:CrudViajeService,
  ) { }

  ngOnInit() {
    const direccion_guardada = localStorage.getItem("nombre_direccion");
    if (direccion_guardada != null) {
      this.viaje.destino = direccion_guardada;
    }
  }

  grabar(){
    this.crud.grabar(this.viaje).then(()=>{
      localStorage.removeItem("nombre_direccion");
      alert('Viaje registrado')
    }).catch((err)=>{
      console.log("error:", err)
    })
  }
}
