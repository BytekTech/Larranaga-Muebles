import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./core/layout/header/header.component";
import { Router, NavigationEnd, RouterOutlet } from "@angular/router";
import { FooterComponent } from './core/layout/footer/footer.component';
import { filter } from 'rxjs/operators';
import { WhatsappComponent } from "./shared/components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, WhatsappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly router = inject(Router);
  
  mostrarHeader: boolean = true; 
  mostrarFooter: boolean = true;
  
  rutaSinHeader = ['/portal-admin', '/terminos-condiciones']; 
  rutaSinFooter = ['/portal-admin'];

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const rutaActual = event.urlAfterRedirects;
      
      this.mostrarHeader = !this.rutaSinHeader.includes(rutaActual);
      this.mostrarFooter = !this.rutaSinFooter.includes(rutaActual);
    });
  }
}