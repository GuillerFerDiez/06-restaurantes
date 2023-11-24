import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../../services/restaurantes.service';
import { Restaurante } from '../../interfaces/restaurantes.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {
  restaurantes: Restaurante[] = [];
  constructor(private restaurantesService: RestaurantesService) { }

  ngOnInit(): void {
    this.restaurantesService.getRestaurantes().subscribe(resp => {
      this.restaurantes = resp;
    });
  }
}