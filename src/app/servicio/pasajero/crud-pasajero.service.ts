import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Pasajero } from 'src/app/model/Pasajero';

@Injectable({
  providedIn: 'root'
})
export class CrudPasajeroService {

  constructor(private afs : AngularFirestore) { }

  grabarPasajero(pasajero: Pasajero){
    return this.afs.collection('pasajero').add(pasajero)
  }
}
