import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonButtons, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[IonHeader,IonToolbar,IonButton,IonButtons,RouterLink]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
