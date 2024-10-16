import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viaje } from 'src/app/model/Viaje';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/compat';
@Injectable({
  providedIn: 'root'
})

export class CrudViajeService {

  constructor(private afs:AngularFirestore,
              private navCtrl: NavController
  ) { }

  grabar(viaje:Viaje){
    return this.afs.collection('viaje').add(viaje);
  }

  listar(): Observable<Viaje[]>{
    return this.afs.collection<Viaje>('viaje').valueChanges({idField:'uid'})
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

  agregarAlViaje(id: string, idPasajero: string){
    const viajeRef = this.afs.collection('viaje').doc(id);
    viajeRef.update({
      pasajeros : firebase.firestore.FieldValue.arrayUnion(idPasajero)
    })
  }

/*   agregarAlViaje(id: string, idPasajero: string){
    const viaje = this.afs.collection('viaje').doc(id);

    return viaje.ref.get().then(dato => {
      if (dato.exists) {
        const data = dato.data() as Viaje
        const pasajeros = data.pasajeros || [];
        if (!pasajeros.includes(idPasajero)) {
          pasajeros.push(idPasajero);
          return viaje.update({ pasajeros });
        } else {
          alert("error1")
          return Promise.resolve();
        }
      } else {
        alert("error2")
        return Promise.resolve();
      }
    })
  } */

}
