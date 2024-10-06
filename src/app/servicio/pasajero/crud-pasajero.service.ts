import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { firstValueFrom, Observable } from 'rxjs';
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

  async getPasajero(id:string): Promise<Pasajero | undefined>{
    const aux = await this.afs.collection('pasajero').doc(id).get().toPromise();
    if (aux?.exists) {
      const pasajero = aux.data() as Pasajero;
      return pasajero;
    } else {
      return undefined;
    }
  }

}
