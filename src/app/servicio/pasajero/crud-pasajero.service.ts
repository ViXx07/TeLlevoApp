import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Pasajero } from 'src/app/model/Pasajero';

@Injectable({
  providedIn: 'root'
})
export class CrudPasajeroService {

  constructor(private afs : AngularFirestore) { }

  grabarPasajero(pasajero : Pasajero){
    return this.afs.collection('pasajero').doc(pasajero.id).set({
      uid: pasajero.id,
      rut: pasajero.rut,
      nombre: pasajero.nombre,
      apellido: pasajero.apellido,
      correoElectronico: pasajero.correoElectronico,
      genero: pasajero.genero,
      fecha_nac: pasajero.fecha_nac,
      tipo: pasajero.tipo,
    });
  }
}
