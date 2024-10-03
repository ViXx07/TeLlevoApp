import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Chofer } from 'src/app/model/Chofer';

@Injectable({
  providedIn: 'root'
})
export class CrudChoferService {

  constructor( private afs : AngularFirestore) { }
  
  grabarChofer(chofer : Chofer){
  return this.afs.collection('chofer').add(chofer);
  }
}
