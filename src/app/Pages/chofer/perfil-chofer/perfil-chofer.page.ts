import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChoferVacio } from 'src/app/model/Chofer';
import { CrudChoferService } from 'src/app/servicio/chofer/crud-chofer.service'

@Component({
  selector: 'app-perfil-chofer',
  templateUrl: './perfil-chofer.page.html',
  styleUrls: ['./perfil-chofer.page.scss'],
})
export class PerfilChoferPage implements OnInit {
  constructor(private CrudChofer: CrudChoferService,
    private navCtrl: NavController,
  ) { }

  jsonUsu = localStorage.getItem("usuario");

  chofer = ChoferVacio();


  modFlag = false;
  modFlagVehi = false;
  cargandoFlag = false;

  ngOnInit() {
    
    
    if (this.jsonUsu !== null) {
      this.cargandoFlag = true;
      this.chofer = JSON.parse(this.jsonUsu);
      if (this.chofer.tipo==='pasajero') {
        this.navCtrl.navigateRoot('perfil-pasajero')
      }
      setTimeout(()=>this.cargandoFlag = false, 800)
    }
  }

  modificando() { this.modFlag = true };
  modificandoVehi() { this.modFlagVehi = true };


  cancelar() {
    if (this.jsonUsu !== null) {
      this.chofer = JSON.parse(this.jsonUsu);
      this.modFlag = false;
      this.modFlagVehi = false
    };
  }

  validar() {
    if (this.chofer.nombre !== '' && this.chofer.apellido !== '' && this.chofer.genero !== '') {
      this.confirmMod();
    }
  };

  validarVehiculo() {
    if (this.chofer.nombre !== '' && this.chofer.apellido !== '' && this.chofer.genero !== '') {
      this.confirmMod();
    }
  };

  async confirmMod() {
    try {
      await this.CrudChofer.modificarChofer(this.chofer)
      this.jsonUsu = JSON.stringify(this.chofer);
      localStorage.setItem("usuario", this.jsonUsu);
      this.chofer = JSON.parse(this.jsonUsu);
      this.modFlag = false;
    } catch (error) {
      alert(error)
    }
  }

}
