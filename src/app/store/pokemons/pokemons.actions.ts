import { createAction } from "@ngrx/store";

const getAllPokemons = createAction(
    "[Home Page] Get All Pokemons"
)

export const pokemonsActions = {
    getAllPokemons
}