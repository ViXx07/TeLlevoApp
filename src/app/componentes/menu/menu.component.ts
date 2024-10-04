import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  
  constructor(private navCtrl:NavController,
    private location:Location
  ) { }

  ngOnInit() {}

  navPagina(page:string) {
    this.navCtrl.navigateForward(page);
  }

  navVolver() {
    this.location.back();
  }
}
