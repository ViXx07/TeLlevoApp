import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  
  constructor(private navCtrl:NavController,
    private location:Location,
    private router: Router
  ) { }

  ngOnInit() {}

  navPagina(page:string) {
    this.router.navigate([page]);
  }

  navVolver() {
    this.location.back();
  }
}
