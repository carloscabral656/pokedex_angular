import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { pokemonsActions } from './store/pokemons/pokemons.actions';
import { IAppState, pokemonsResumeSelector } from './store/app.state';
import { Observable, first, take, tap } from 'rxjs';
import { PokemonResume } from './interfaces/pokemon-resume.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public pokemonsResume$: Observable<PokemonResume[]>;
  public pokemons: WritableSignal<PokemonResume[]>;
  public selectedPokemon: Signal<PokemonResume | undefined>;
  public pokemonIndex: WritableSignal<number>;

  constructor(private store: Store<IAppState>) {
    this.pokemonsResume$ = this.store.select(pokemonsResumeSelector);
    this.pokemons = signal([]);
    this.selectedPokemon = computed(() => undefined);
    this.pokemonIndex = signal(0);
  }

  ngOnInit(): void {
    this.store.dispatch(pokemonsActions.getAllPokemons());

    this.pokemonsResume$.subscribe((pokemonResume: PokemonResume[]) => {
      this.pokemons.set(pokemonResume ?? []);
    });

    this.selectedPokemon = computed(() => {
      if (this.pokemons().length === 0) undefined;
      return this.pokemons()[this.pokemonIndex()];
    });
  }

  nextPokemon() {
    this.pokemonIndex.update((oldIndex) =>
      oldIndex === this.pokemons().length - 1 ? oldIndex : (oldIndex += 1)
    );
  }

  nextPokemonButtonIsDisabled() {
    return this.pokemonIndex() === this.pokemons().length - 1;
  }

  previousPokemon() {
    this.pokemonIndex.update((oldIndex) =>
      oldIndex === 0 ? 0 : (oldIndex -= 1)
    );
  }

  previousPokemonButtonIsDisabled() {
    return this.pokemonIndex() === 0;
  }
}
