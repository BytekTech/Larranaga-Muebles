import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'Nosotros',
    loadChildren: () => import('./features/us/us.routes').then(m => m.US_ROUTES)
  },
  {
    path: 'Trabajos',
    loadChildren: () => import('./features/works/works.routes').then(m => m.WORKS_ROUTES)
  },
  {
    path: 'Terminos-Condiciones',
    loadChildren: () => import('./features/legal/legal.routes').then(m => m.LEGAL_ROUTES)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]