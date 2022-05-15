import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { environment } from '../../../environments/environment';
=======
>>>>>>> d1d73b43475580ecd2c5269b1825eaae6b9a969d
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

<<<<<<< HEAD
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes() : Observable<Heroe[]> {
      return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId( id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias( termino:string ): Observable<Heroe[]> {
      return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
=======
  constructor(private http: HttpClient) { }

  getHeroes() : Observable<Heroe[]> {
      return this.http.get<Heroe[]>('http://localhost:3000/heroes');
>>>>>>> d1d73b43475580ecd2c5269b1825eaae6b9a969d
  }
}
