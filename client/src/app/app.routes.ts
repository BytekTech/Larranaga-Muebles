import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./features/us/us.routes').then(m => m.US_ROUTES)
  },
  {
    path: 'trabajos',
    loadChildren: () => import('./features/works/works.routes').then(m => m.WORKS_ROUTES)
  },
  {
    path: 'terminos-condiciones',
    loadChildren: () => import('./features/legal/legal.routes').then(m => m.LEGAL_ROUTES)
  },
  {
    path: 'portal-admin',
    canActivate: [authGuard],
    loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]