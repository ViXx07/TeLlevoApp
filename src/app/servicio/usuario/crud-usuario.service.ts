import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class CrudUsuarioService {

  constructor(private afs : AngularFirestore) { }

  grabar (Usuario:Usuario){
    return this.afs.collection('Usaurio').add(Usuario)
  }

}
