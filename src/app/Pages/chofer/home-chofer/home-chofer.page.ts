import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//Importaciones para el mapa 
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Feature, ServicioMapboxService } from './servicio-mapbox.service';
import { HttpClient } from '@angular/common/http';
import { Direccion } from 'src/app/model/Direccion';

@Component({
  selector: 'app-home-chofer',
  templateUrl: './home-chofer.page.html',
  styleUrls: ['./home-chofer.page.scss'],
})
export class HomeChoferPage implements OnInit {
  map:mapboxgl.Map;
  direccion: string = '';
  direcciones: Direccion[] = [];
  dire_seleccion = '';
  ruta='https://api.mapbox.com/geocoding/v5/mapbox.places/XXXXX.json?access_token=pk.eyJ1IjoianVha28xMDUiLCJhIjoiY20yY3F4MzFuMGxjZjJpbzh1MmtwN3RkeSJ9.eq0Klw01jvADGQMMR8THBw'
  geometria='https://api.mapbox.com/directions/v5/mapbox/driving/-70.57881856510504,-33.59844199173414;LNG,LAT?geometries=geojson&access_token=pk.eyJ1IjoianVha28xMDUiLCJhIjoiY20yY3F4MzFuMGxjZjJpbzh1MmtwN3RkeSJ9.eq0Klw01jvADGQMMR8THBw'

  constructor(
    private navCtrl: NavController,
    private mapboxServicio: ServicioMapboxService,
    private http: HttpClient
  ) { }

  ngOnInit():void { }

  ionViewWillEnter(){
    if (localStorage.getItem('perfil')==='pasajero') {
      this.navCtrl.navigateRoot('home-pasajero')
    }
    this.mapa() 
  }

  busqueda(event: any){
    const busqueda = event.target.value.toLowerCase();
    console.log('Valor ingresado en el searchbar:', busqueda); 
    
    

    if (busqueda && busqueda.length > 0){
      this.mapboxServicio
        .buscarDireccion(busqueda)
        .subscribe((features: Feature[])=>{
          this.direcciones = features.map(item => ({
            nombre: item.place_name,
            lng: item.center[0],
            lat: item.center[1]
          }));
            
          console.log('Resultados de la búsqueda:', this.direcciones);
        });
    } else {
      this.direcciones = [];
    }
  }

  seleccionar(direccion: Direccion){
    console.log('Dirección seleccionada:', direccion);
    this.dire_seleccion = direccion.nombre;
    this.direcciones = [];

    const ev = {
      detail:{
        value: {
          lat: direccion.lat,
          lng: direccion.lng
        }
      }
    };

    this.direccion_seleccionada(ev);
/*     var nueva_ruta = this.ruta.replaceAll('XXXXX', this.direccion);
    this.http.get(nueva_ruta).subscribe((data)=> {
      let direcciones = JSON.parse(JSON.stringify(data))['features'];
      this.direcciones = [];

      for (let index = 0; index < direcciones.length; index++) {
        const element = direcciones[index];
        let dire:Direccion = {
          nombre: element.place_name,
          lng: element.center[0],
          lat: element.center[1]
        };
        this.direcciones.push(dire);
      }
    }); */
  }

  direccion_seleccionada(ev){
    console.log(ev.detail.value)

    const lat = ev.detail.value["lat"];
    const lng = ev.detail.value["lng"];
    console.log(`Latitud: ${lat}, Longitud: ${lng}`);
    
    var texto1=this.geometria.replaceAll('LNG', lng)
    var texto2=texto1.replaceAll('LAT', lat)
    this.geometria=texto2;

    console.log('url de ruta generada: ', this.geometria)

    this.marcador(lng, lat);

    this.generar_ruta()
  }

  marcador(lng:number,lat:number){
    new mapboxgl.Marker({color:'yellow'}).setLngLat([lng,lat]).addTo(this.map)
  }

  mapa(){
    this.map = new mapboxgl.Map({

      accessToken: environment.MAPBOX_ACCESS_TOKEN,
      container: 'mapa-box',
      style: 'mapbox://styles/mapbox/streets-v12',
      center:[ -70.57880159991507,-33.59846466294888],
      zoom:16,
      collectResourceTiming: false,
    });
    new mapboxgl.Marker({color:'yellow'}).setLngLat([-70.57880159991507,-33.59846466294888]).addTo(this.map)
  }

  generar_ruta(){
    this.http.get(this.geometria).subscribe((data:any)=>{
      console.log(data.routes[0].geometry)
      this.map.addSource('route',{
        type:'geojson',
        data:{
          type:'Feature',
          geometry:data.routes[0].geometry,
          properties:{}
        }
      });
      this.map.addLayer({
        id:'route',
        type:'line',
        source:'route',
        layout:{
          "line-cap":'round',
          "line-join":'round'
        },
        paint:{
          "line-color":'blue',
          "line-width":3
        }
      })
    })
  }

}

