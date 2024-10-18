import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CrudViajeService } from 'src/app/servicio/viaje/crud-viaje.service';
import { Viaje } from 'src/app/model/Viaje';
@Component({
  selector: 'app-misviajes-chofer',
  templateUrl: './misviajes-chofer.page.html',
  styleUrls: ['./misviajes-chofer.page.scss'],
})
export class MisviajesChoferPage implements OnInit {

  constructor(private navCtrl: NavController,
              private crudViaje: CrudViajeService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('perfil')==='pasajero') {
      this.navCtrl.navigateRoot('misviajes-pasajero')
    }
    this.listar()
    
    
  }
  
  viajes : any = [];

  async listar(){
    try {
      await this.crudViaje.listarViajesChofer(localStorage.getItem('idUsuario')||'').subscribe(data=>{
        this.viajes=data;
        console.log(this.viajes)
      })
    } catch (error) { 
      alert(error)
    }
  }

  async finalizarViaje(idViaje:string){
    try {
      await this.crudViaje.modificarEstadoViaje(idViaje);
      alert("Finalizado con éxito")
    } catch (error) {
      alert(error)
    }
  }
  async eliminarViaje(idViaje:string){
    try {
      await this.crudViaje.eliminarViaje(idViaje);
      alert("eliminado con éxito")
    } catch (error) {
      alert(error)
    }
  }


}
