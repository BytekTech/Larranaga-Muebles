import { Component } from '@angular/core';
import { ImageComponent } from './components/image/image.component';
import { LegalSectionComponent } from './components/legal-section/legal-section.component';
import { PlacesSectionComponent } from './components/places-section/places-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@Component({
  selector: 'app-footer',
  imports: [
    ImageComponent, 
    PlacesSectionComponent,
    ContactSectionComponent,
    LegalSectionComponent 
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

}
