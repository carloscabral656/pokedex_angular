import { createSelector } from "@ngrx/store";
import { PokemonsState } from "./pokemons/pokemons.reducers";

export interface IAppState {
    pokemons: PokemonsState,
}

export const pokemonsResumeSelector = (store: IAppState) => store.pokemons.pokemonsResume;