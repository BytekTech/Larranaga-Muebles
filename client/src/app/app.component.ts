import { Component } from '@angular/core';
import { HeaderComponent } from "./core/layout/header/header.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from './core/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}