import { Component, OnInit, signal } from '@angular/core';
import { IonButton, IonTextarea } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import * as math from 'mathjs';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss'],
  imports:[IonTextarea,IonButton,HeaderComponent],
})
export class ClassicComponent  implements OnInit {
  // numbers: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  isPercentage = false;
  userInputDisplay = signal('');
  endResult = signal('0');

  // Adds the last user input to the string that is going to be calculated
  appendUserInput(userInput:string){
  const currentValue = this.userInputDisplay().toString();
  const lastChar = currentValue[currentValue.length - 1];

  // Check if current input is logical to avoid mathematical errors
  if ((currentValue === '' && !/\d/.test(userInput)) || (!/\d/.test(lastChar) && !/\d/.test(userInput))) {
    return;
  }
    this.userInputDisplay.update((val) => val + userInput)
  }

  // Remove last user input
  removeLastInput(){
    this.userInputDisplay.update((val) => val.slice(0, -1));
  }

  // Calculates final result 
  calculateResult(){
    const toBeCalculatedExpression = this.userInputDisplay().toString()
    this.endResult.set(math.evaluate(toBeCalculatedExpression))
  }

  // Clear result and input
  clearDisplay(){
    this.userInputDisplay.set('')
    this.endResult.set('0')
  }

  // Convert the result to percentage and back
  resultToPercentage(){
    if(!this.isPercentage && this.userInputDisplay().length > 0){
      this.calculateResult()
      this.endResult.update(() => (parseFloat(this.endResult()) / 100).toFixed(3).toString() + '%')
      this.isPercentage = true
      return;
    }
    this.calculateResult()
    this.isPercentage = false
  }

  ngOnInit() {}

}
