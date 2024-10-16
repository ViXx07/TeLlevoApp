import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viaje } from 'src/app/model/Viaje';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudViajeService {

  constructor(private afs:AngularFirestore) { }

  grabar(viaje:Viaje){
    return this.afs.collection('viaje').add(viaje);
  }

  listar(): Observable<Viaje[]>{
    return this.afs.collection<Viaje>('viaje').valueChanges({idField: 'uid'})
  }
  
  modificarViaje(viaje: Viaje){
    return this.afs.collection('viaje').doc(viaje.uid).update({
      destino: viaje.destino,
      hora_inicio: viaje.hora_inicio,
      punto_encuentro: viaje.punto_encuentro,
      valor: viaje.valor,
      numPasajeros: viaje.numPasajeros,
    });
  }
  
  eliminarViaje(viaje: Viaje){
    return this.afs.collection('viaje').doc(viaje.uid).delete();
  }
}
