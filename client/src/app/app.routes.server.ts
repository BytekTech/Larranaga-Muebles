import { RenderMode, ServerRoute } from '@angular/ssr'

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'nosotros',
    renderMode: RenderMode.Prerender,
  },
  {
    path:'trabajos',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'portal-admin',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
]