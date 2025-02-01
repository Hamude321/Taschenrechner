import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mode } from '../model/mode.type';

@Injectable({
  providedIn: 'root'
})
export class ModesService {
  modes : Array<mode> = 
  [
    {
      name: 'Classic',
      route: '/classic',
      imageUrl: 'assets/modes/classic.png',
    },
    {
      name: 'Shuffle',
      route: '/shuffle',
      imageUrl: 'assets/modes/shuffle.png',
    }
  ];

  getModes(): Observable<mode[]> {
    return of(this.modes); 
  }

  constructor() { }
}
