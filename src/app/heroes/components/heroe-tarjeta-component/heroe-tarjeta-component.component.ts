import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta-component',
  templateUrl: './heroe-tarjeta-component.component.html',
  styles: [
<<<<<<< HEAD
    `
      mat-card {
          margin-top: 20px;
      }
    `
=======
>>>>>>> d1d73b43475580ecd2c5269b1825eaae6b9a969d
  ]
})
export class HeroeTarjetaComponentComponent {

  @Input() heroe!: Heroe;



}
