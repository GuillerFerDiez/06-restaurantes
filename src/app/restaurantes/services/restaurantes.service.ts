import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../interfaces/restaurantes.interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class RestaurantesService {
  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl;

  getRestaurantes(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.baseUrl + '/restaurantes');
  }

  getRestaurantesPorId(id: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(this.baseUrl + '/restaurantes/' + id);
  }

}