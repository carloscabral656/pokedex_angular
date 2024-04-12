import { PokemonResume } from "../pokemon-resume.model";

export interface PokemonsResumeResponse {
    count: number;
    next: string;
    previous?: any,
    results: PokemonResume[];
}