import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  }, 
  {
    path: '',
    loadChildren: () => import('./Pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./Pages/autenticacion/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/autenticacion/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Pages/autenticacion/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home-pasajero',
    loadChildren: () => import('./Pages/pasajero/home-pasajero/home-pasajero.module').then( m => m.HomePasajeroPageModule)
  },
  {
    path: 'home-chofer',
    loadChildren: () => import('./Pages/chofer/home-chofer/home-chofer.module').then( m => m.HomeChoferPageModule)
  },
  {
    path: 'perfil-pasajero',
    loadChildren: () => import('./Pages/pasajero/perfil-pasajero/perfil-pasajero.module').then( m => m.PerfilPasajeroPageModule)
  },
  {
    path: 'qr-pasajero',
    loadChildren: () => import('./Pages/pasajero/qr-pasajero/qr-pasajero.module').then( m => m.QrPasajeroPageModule)
  },
  {
    path: 'misviajes-pasajero',
    loadChildren: () => import('./Pages/pasajero/misviajes-pasajero/misviajes-pasajero.module').then( m => m.MisviajesPasajeroPageModule)
  },
  {
    path: 'misviajes-chofer',
    loadChildren: () => import('./Pages/chofer/misviajes-chofer/misviajes-chofer.module').then( m => m.MisviajesChoferPageModule)
  },
  {
    path: 'perfil-chofer',
    loadChildren: () => import('./Pages/chofer/perfil-chofer/perfil-chofer.module').then( m => m.PerfilChoferPageModule)
  },
  {
    path: 'qr-chofer',
    loadChildren: () => import('./Pages/chofer/qr-chofer/qr-chofer.module').then( m => m.QrChoferPageModule)
  },
  /* La página de error siempre debe quedar al final para que no genere conflictos */
  {
    path: '**',
    loadChildren: () => import('./Pages/p404/p404.module').then( m => m.P404PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
