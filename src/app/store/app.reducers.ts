import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "./app.state";
import { pokemonsReducer } from "./pokemons/pokemons.reducers";

export const appReducers: ActionReducerMap<IAppState> = {
    pokemons: pokemonsReducer
}