import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonButtons, IonImg, IonFooter } from '@ionic/angular/standalone';
import { ModesService } from '../../services/modes.service';
import { mode } from '../../model/mode.type';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonButtons, RouterLink,IonImg,IonFooter,CommonModule,HeaderComponent],
})
export class HomePage {
  debug : boolean = false;
  modes : Array<mode> = []

  constructor(private modeService: ModesService) {}

  ngOnInit() {
    this.modeService.getModes().subscribe(
      (modes) => {this.modes = modes}
    );
  }
}
