import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, signal } from '@angular/core';
import { IonButton, IonTextarea } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'shuffle.component.html',
  // styleUrls: ['classic.component.scss'],
  imports:[IonTextarea,HeaderComponent,IonButton,CommonModule]
})
export class ShuffleComponent implements OnInit {

  numbers = signal<string[]>(['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']);
 
  shuffleButtons(){
    const shuffledNumbers = [...this.numbers()].sort(() => Math.random() - 0.5);
    this.numbers.set(shuffledNumbers);
  }

  ngOnInit(): void {
    this.shuffleButtons();
  }
}
