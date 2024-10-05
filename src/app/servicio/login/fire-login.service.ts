import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FireLoginService {
  constructor(
    public Firestore: AngularFirestore,
    public AFU: AngularFireAuth
  ) { }
  GetUsuarios():Observable<any[]>{
    return this.Firestore.collection("Usuario").valueChanges();
  }
  async editarUsuario(UsuarioID:any, updateData:any){
    await this.Firestore.collection("Usuario").doc(UsuarioID).set(updateData);
  }

  deleteUsuario(UsuarioID:any){
    return this.Firestore.collection("Usuario").doc(UsuarioID).delete();
  }
  
  login(email:any,contrasena:any){
    return this.AFU.signInWithEmailAndPassword(email,contrasena);
  }

  registro(mail:any,pass:any){
    return this.AFU.createUserWithEmailAndPassword(mail,pass);
  }

  desconectar() {
    return this.AFU.signOut();
  }
  
  recuperarPass(email: string) {
    return this.AFU.sendPasswordResetEmail(email)
    .then(() => {
      console.log('Correo enviado!');
    })
    .catch((error) => {
      console.log('Error al enviar el correo!');
      throw error;
    });
  }
}
