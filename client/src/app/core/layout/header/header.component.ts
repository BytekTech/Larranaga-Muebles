import { Component, inject } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { NgClass } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly router = inject(Router);
  darkStyle: boolean = true;
  routesStyle = ['/trabajos', '/nosotros', '/producto'];

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.darkStyle = this.routesStyle.includes(event.urlAfterRedirects);
    });
  }
}
