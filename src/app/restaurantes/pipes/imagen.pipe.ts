import { Pipe, PipeTransform } from '@angular/core';
import { Restaurante } from '../interfaces/restaurantes.interfaces';

@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

  transform(restaurante: Restaurante): string {
    return 'assets/Fotos/' + restaurante.Imagen;
  }

}
