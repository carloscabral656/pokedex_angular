import { createReducer, createSelector, MetaReducer, on } from '@ngrx/store';
import { pokemonsActions } from './pokemons.actions';
import { PokemonResume } from '../../interfaces/pokemon-resume.model';

export interface PokemonsState {
  pokemonsResume: PokemonResume[];
}

const initialState: PokemonsState = {
  pokemonsResume: [],
};

export const pokemonsReducer = createReducer(
  initialState,
  on(pokemonsActions.getAllPokemonsSuccess, (state, action) => {
    return {
      ...state,
      pokemonsResume: action.pokemonsResume.results,
    };
  })
);
