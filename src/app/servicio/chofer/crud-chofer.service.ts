import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Chofer } from 'src/app/model/Chofer';

@Injectable({
  providedIn: 'root'
})
export class CrudChoferService {

  constructor( private afs : AngularFirestore) { }
  
  grabarChofer(chofer : Chofer){
    return this.afs.collection('chofer').doc(chofer.id).set({
      uid               : chofer.id,
      rut               : chofer.rut,
      nombre            : chofer.nombre,
      apellido          : chofer.apellido,
      correoElectronico : chofer.correoElectronico,
      genero            : chofer.genero,
      fecha_nac         : chofer.fecha_nac,
      modelo            : chofer.modelo,
      patente           : chofer.patente,
      tipo              : chofer.tipo,
    });
  }
}
