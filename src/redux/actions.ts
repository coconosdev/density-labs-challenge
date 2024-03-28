import { Pokemon } from '../types/Pokemon.ts';

export const SET_POKEMON_LIST = 'SET_POKEMON_LIST';
export const SET_ACTIVE_POKEMON = 'SET_ACTIVE_POKEMON';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

interface SetPokemonListAction {
  type: typeof SET_POKEMON_LIST;
  payload: Pokemon[];
}

interface SetActivePokemonAction {
  type: typeof SET_ACTIVE_POKEMON;
  payload: Pokemon;
}

interface SetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
}

export type PokemonActionTypes =
  | SetPokemonListAction
  | SetActivePokemonAction
  | SetCurrentPageAction;

export const setPokemonList = (pokemonList: Pokemon[]): SetPokemonListAction => ({
  type: SET_POKEMON_LIST,
  payload: pokemonList,
});

export const setActivePokemon = (pokemon: Pokemon): SetActivePokemonAction => ({
  type: SET_ACTIVE_POKEMON,
  payload: pokemon,
});

export const setCurrentPage = (page: number): SetCurrentPageAction => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
