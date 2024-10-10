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
  
  login(email:string,contrasena:string){
    return this.AFU.signInWithEmailAndPassword(email,contrasena);
  }

  registro(mail:any,pass:any){
    return this.AFU.createUserWithEmailAndPassword(mail,pass);
  }
  /* este tienes que llamar para desconectarte */
  desconectar() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("idUsuario");
    return this.AFU.signOut();
  }

  prueba(email:string){
    return this.AFU.fetchSignInMethodsForEmail(email);
  }
  recuperarContrasena(email: string) {
    return this.AFU.sendPasswordResetEmail(email);
  }

/*   db.collection("usuarios") // Reemplaza "usuarios" con el nombre de tu colección
  .where("email", "==", emailToCheck) // Asegúrate de que "email" es el campo correcto
  .get() */


}
