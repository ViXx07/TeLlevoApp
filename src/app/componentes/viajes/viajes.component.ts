import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss'],
})
export class ViajesComponent  implements OnInit {

  @Input() destino:string = '';
  @Input() hora:string = '';
  @Input() fecha:string = '';
  @Input() monto:string = '';
  @Input() chofer:string = '';

  constructor() { }

  ngOnInit() {}

}
