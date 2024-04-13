import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pokemonsActions } from './pokemons.actions';
import { EMPTY, catchError, exhaustMap, map, tap } from 'rxjs';
import { PokemonsService } from '../../services/pokemons.service';

@Injectable()
export class PokemonsEffects {
  loadMovies$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(pokemonsActions.getAllPokemons),
        exhaustMap(() =>
          this.pokemonsService.getAllPokemons().pipe(
            map((pokemonsResume) =>
              pokemonsActions.getAllPokemonsSuccess({
                pokemonsResume: pokemonsResume,
              })
            ),
            catchError(() => EMPTY)
          )
        )
      ),
    { functional: true }
  );

  constructor(
    private actions$: Actions,
    private pokemonsService: PokemonsService
  ) {}
}
