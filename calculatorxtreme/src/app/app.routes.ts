import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'classic',
    loadComponent: () => import('./mode/classic/classic.component').then((m) => m.ClassicComponent),
  },
  {
    path: 'shuffle',
    loadComponent: () => import('./mode/shuffle/shuffle.component').then((m) => m.ShuffleComponent),
  },
  {
    path: 'test',
    loadComponent: () => import('./mode/test/test.component').then((m) => m.TestComponent),
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
