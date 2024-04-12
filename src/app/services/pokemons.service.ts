import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PokemonsResumeResponse } from '../interfaces/responses/pokemons-resume.response';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private httpClient: HttpClient;
  constructor() {
    this.httpClient = inject(HttpClient);
  }

  getAllPokemons(): Observable<PokemonsResumeResponse> {
    return this.httpClient.get<PokemonsResumeResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
}
