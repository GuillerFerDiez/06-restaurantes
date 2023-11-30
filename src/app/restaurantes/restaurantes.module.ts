import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { RestauranteComponent } from './pages/restaurante/restaurante.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RestaurantesRoutingModule } from './restaurantes-routing.module';
import { MaterialModule } from '../material/material.module';
import { RestauranteTarjetaComponent } from './component/restaurante-tarjeta/restaurante-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './component/confirmar/confirmar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    RestauranteComponent,
    HomeComponent,
    ListadoComponent,
    RestauranteTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    RestaurantesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})

export class RestaurantesModule { }