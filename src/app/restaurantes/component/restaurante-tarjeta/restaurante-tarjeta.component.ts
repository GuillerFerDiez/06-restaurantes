import { Component, Input } from '@angular/core';
import { Restaurante } from '../../interfaces/restaurantes.interfaces';

@Component({
  selector: 'app-restaurante-tarjeta',
  templateUrl: './restaurante-tarjeta.component.html',
  styleUrls: ['./restaurante-tarjeta.component.css']
})

export class RestauranteTarjetaComponent {
  @Input() restaurante!: Restaurante;
}
