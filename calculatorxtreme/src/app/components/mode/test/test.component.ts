import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonButtons, RouterLink,IonImg,IonFooter, CommonModule],
})
export class TestComponent  implements OnInit {
  modes = [
    { id: 'classic', name: 'Classic Mode', image: 'assets/modes/classic.png', route: '/classic' },
    { id: 'shuffle', name: 'Shuffle Mode', image: 'assets/modes/shuffle.png', route: '/shuffle' },
    // Add more modes as needed
  ];
  constructor() { }

  ngOnInit() {}

}
