import { Component } from '@angular/core';
import { Restaurante } from '../../interfaces/restaurantes.interfaces';
import { RestaurantesService } from '../../services/restaurantes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})

export class BuscarComponent {
  termino: string = ''; // termino de busqueda
  restaurantes: Restaurante[] = [];  // Ctrl + pto
  constructor(private restaurantesService: RestaurantesService) { }

  buscando() {
    //this.heroesService.getHeroes().subscribe(heroes => this.heroes=heroes); 
    this.restaurantesService.getRestaurantes().subscribe(restaurantes => { this.restaurantes = restaurantes; })
  }
}