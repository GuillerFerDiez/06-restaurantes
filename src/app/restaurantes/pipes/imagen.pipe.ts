import { Pipe, PipeTransform } from '@angular/core';
import { Restaurante } from '../interfaces/restaurantes.interfaces';

@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

  transform(restaurante: Restaurante): string {

    if (restaurante.alt_img) {
      return restaurante.alt_img;
    } else if (!restaurante.imagen) {
      return 'assets/Fotos/noimages.jpg';
    } else {
      return 'assets/Fotos/' + restaurante.imagen;
    }
  }
}
