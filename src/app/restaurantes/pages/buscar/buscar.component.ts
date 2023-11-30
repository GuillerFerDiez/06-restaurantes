import { Component } from '@angular/core';
import { Restaurante } from '../../interfaces/restaurantes.interfaces';
import { RestaurantesService } from '../../services/restaurantes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})

export class BuscarComponent {
  restauranteEncontrado: boolean = false;
  termino: string = ''; // termino de busqueda
  restaurantes: Restaurante[] = [];  // Ctrl + pto
  restauranteSeleccionado: Restaurante | undefined;

  constructor(private restaurantesService: RestaurantesService) { }

  ngOnInit(): void { }

  buscando() {
    //this.restaurantesService.getRestaurantes().subscribe(restaurantes => { this.restaurantes = restaurantes; })
    this.restaurantesService.getSugerencias(this.termino).subscribe(restaurantes => {
      if (restaurantes.length === 0) { this.restauranteEncontrado = true; } else { this.restauranteEncontrado = false; }
      this.restaurantes = restaurantes;
    })
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const restaurante: Restaurante = event.option.value;

    if (restaurante === undefined) {
      this.restauranteSeleccionado = undefined;
      return;
    }

    this.termino != restaurante.nombre; //para que se vea en el input
    this.restaurantesService.getRestaurantesPorId(restaurante.id!)
      .subscribe(restaurante => this.restauranteSeleccionado = restaurante);
  }
}