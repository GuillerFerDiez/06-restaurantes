import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../interfaces/restaurantes.interfaces';
import { RestaurantesService } from '../../services/restaurantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../component/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {
  restaurante: Restaurante = {
    nombre: '',
    descripcion: '',
    imagen: '',
    telefono: '',
    direccion: '',
    email: '',
    web: '',
    capacidad: '',
    lat: '',
    lon: '',
    url: ''
  }

  constructor(private restaurantesService: RestaurantesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }


  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params.pipe(switchMap(({ id }) => this.restaurantesService.getRestaurantesPorId(id)))
      .subscribe(restaurante => this.restaurante = restaurante);

    //this.restaurantesService.getRestaurantesPorId(this.activatedRoute.snapshot.params['id'])
    //.subscribe(restaurante => this.restaurante = restaurante);     // FUNCIONA
  }

  guardar() {
    if (this.restaurante.nombre.trim().length === 0) { return; }

    if (this.restaurante.id) {
      // Actualizaremos el registro
      this.restaurantesService.actualizarRestaurante(this.restaurante)
        .subscribe(restaurante => {
          console.log('Actualizando', restaurante);
          this.restaurante = restaurante;
          this.mostrarSnackBar('Registro actualizado');
        })
    } else {
      // Crearemos un nuevo registro
      this.restaurantesService.agregarRestaurante(this.restaurante)
        .subscribe(restaurante => {
          console.log('Agregando', restaurante);
          this.mostrarSnackBar('Registro creado');
          this.router.navigate(['/restaurantes/editar', restaurante.id]);
        })
    }
  }

  borrarRestaurante() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.restaurante
      //CUIDADO, en typescript TODO se pasa por  referencia
      //Para que sea de solo lectura pondriamos {...this.heroe}
    });

    dialog.afterClosed().subscribe(
      (result) => {
        console.log(result); //true o undefined
        if (result) {
          this.restaurantesService.borrarRestaurante(this.restaurante.id!)
            .subscribe(resp => {
              this.mostrarSnackBar('Registro borrado');
              this.router.navigate(['/restaurantes']);
            })
        }
      }
    )
  }

  mostrarSnackBar(mensaje: string): void {
    this.snackBar.open(mensaje, 'cerrar', { duration: 2500 })
  }

}