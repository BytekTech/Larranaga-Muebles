import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CategoryComponent } from '../../components/category/category.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ServicesComponent } from '../../components/services/services.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent, 
    CategoryComponent, 
    ProductsComponent, 
    ServicesComponent, 
    FormComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

}
