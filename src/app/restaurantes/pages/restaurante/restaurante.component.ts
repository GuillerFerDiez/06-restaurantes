import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantesService } from '../../services/restaurantes.service';
import { delay, switchMap } from 'rxjs';
import { Restaurante } from '../../interfaces/restaurantes.interfaces';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})

export class RestauranteComponent implements OnInit {
  restaurante!: Restaurante;

  constructor(private activatedRoute: ActivatedRoute,
    private restaurantesService: RestaurantesService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['Id']);
    this.activatedRoute.params.pipe(
      delay(2000), switchMap(({ id }) => this.restaurantesService.getRestaurantesPorId(id)))
      .subscribe(restaurante => restaurante = restaurante)
  }

  regresar() {
    this.router.navigate(['/restaurantes/listado']);
  }
}