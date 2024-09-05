                                                                              tutorial para crear componentes 
                                                                                
Instalar cliente de angular: npm install -g @angular/cliente

Instalar angular material: ng add @angular/material

1)CREAR COMPONENTES: 
	ionic g > compoent
	PATH: componentes/nombre_componente

2)CREAR MÓDULO:
	ionic g > module 
	PATH: componentes/modulo

3)IMPORTAR IONIC EN MODULO 
	En: (componentes/modulo/modulo.module.ts)
	// Importar módulo de Ionic
	import { IonicModule } from '@ionic/angular
	// Importar componentes creados:
	import { nombre_componente } from ... ;
	
	// Declarar y exportar los componentes:
	@NgModule({
	  declarations: [
		nombre_componente
	  ],
	  imports: [
		CommonModule,
		IonicModule,
	  ],exports:[
		nombre_componente,
	  ]
	})
	
4)IMPORTAR MÓDULO PARA USAR LOS COMPONENTES CREADOS

	Dentro de la carpeta donde se quiere importar el componente: 
	import { ModuloModule } from 'src/app/componentes/modulo/modulo.module';
	
	@NgModule({
	  imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		P404PageRoutingModule,
		ModuloModule,
	  ],
	  declarations: [P404Page]
	})

5) AGREGAR COMPONENTE AL HTML 
	<app-nombre_componente></app-nombre_componente>
