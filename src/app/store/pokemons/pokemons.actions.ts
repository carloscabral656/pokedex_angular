import { createAction, props } from "@ngrx/store";
import { PokemonsResumeResponse } from "../../interfaces/responses/pokemons-resume.response";

const getAllPokemons = createAction(
    "[Home Page] Get All Pokemons",
)

const getAllPokemonsSuccess = createAction(
    "[Home Page] Get All Pokemons Success",
    props<{ pokemonsResume: PokemonsResumeResponse}>()
)

export const pokemonsActions = {
    getAllPokemons,
    getAllPokemonsSuccess
}