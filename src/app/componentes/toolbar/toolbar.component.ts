import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {

  constructor() {
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });
  }

  ngOnInit() {}

}
