import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class desActivadoGuard implements CanActivate {

  constructor(public navCtrl: NavController){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('usuario')){
        if (localStorage.getItem('perfil')=="chofer") {
          this.navCtrl.navigateForward('home-chofer');        
        } else {
          this.navCtrl.navigateForward('home-pasajero');        
        }
        return false;
      }else{
        return true;
      }
  }
  
}