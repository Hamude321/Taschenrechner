import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'classic',
    loadComponent: () => import('./pages/classic/classic.component').then((m) => m.ClassicComponent),
  },
  {
    path: 'shuffle',
    loadComponent: () => import('./pages/shuffle/shuffle.component').then((m) => m.ShuffleComponent),
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/testpage/test.component').then((m) => m.TestComponent),
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
