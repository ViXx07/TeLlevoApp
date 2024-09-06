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
<<<<<<< HEAD
];

=======
  {
    path: 'inicio',
    loadChildren: () => import('./Pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },

];

>>>>>>> 3eee79fa96c6503858ff0a5ca6cef5f34744be65
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
