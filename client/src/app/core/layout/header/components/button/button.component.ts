import { Component } from '@angular/core';
import headerData from '../../../../../../assets/data/header.json'

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})

export class ButtonComponent {
  buttons: any[] = headerData.menu_navegacion;

  constructor(){
    console.log('Datos cargados estáticamente', this.buttons)
  }
}
