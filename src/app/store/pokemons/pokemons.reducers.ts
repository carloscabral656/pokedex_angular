import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { pokemonsActions } from './pokemons.actions';

export interface PokemonsState {
  pokemons: any[];
}

const initialState: PokemonsState = {
  pokemons: [],
};

export const pokemonsReducer = createReducer(
  initialState,
  on(pokemonsActions.getAllPokemons, (state) => {
    return {
      ...state,
      pokemons: [],
    };
  })
);

