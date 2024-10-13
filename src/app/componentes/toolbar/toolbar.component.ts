import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {

  constructor(private router: Router) {
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });
  }
  perfil: string | null = null;

  ngOnInit() {
    this.perfil = localStorage.getItem('perfil');
  }

  navPagina(page: string){
    this.router.navigate([page]).then(()=>{
      location.reload();
    })
  }
}
