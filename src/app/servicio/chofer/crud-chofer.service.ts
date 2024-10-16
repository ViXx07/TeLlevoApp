import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Chofer } from 'src/app/model/Chofer';

@Injectable({
  providedIn: 'root'
})
export class CrudChoferService {

  constructor( private afs : AngularFirestore) { }
  
  grabarChofer(chofer : Chofer){
    return this.afs.collection('chofer').doc(chofer.uid).set({
      uid               : chofer.uid,
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

  modificarChofer(chofer : Chofer){
    return this.afs.collection('chofer').doc(chofer.uid).update({
      nombre: chofer.nombre,
      apellido: chofer.apellido,
      correoElectronico: chofer.correoElectronico,
      genero: chofer.genero,
      modelo: chofer.modelo,
      patente: chofer.patente,
    });
  }


  getChofer(id:string): Observable<any>{
    return this.afs.collection('chofer').doc(id).valueChanges();
  }

}
