import { combineReducers } from 'redux';
import {
  SET_POKEMON_LIST,
  SET_ACTIVE_POKEMON,
  SET_CURRENT_PAGE,
  PokemonActionTypes,
} from './actions.ts';
import { Pokemon } from '../types/Pokemon';

interface State {
  pokemonList: Pokemon[];
  activePokemon: Pokemon | null;
  currentPage: number;
}

const initialState: State = {
  pokemonList: [],
  activePokemon: null,
  currentPage: 1,
};

const pokemonListReducer = (state = initialState.pokemonList, action: PokemonActionTypes) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return action.payload;
    default:
      return state;
  }
};

const activePokemonReducer = (state = initialState.activePokemon, action: PokemonActionTypes) => {
  switch (action.type) {
    case SET_ACTIVE_POKEMON:
      return action.payload;
    default:
      return state;
  }
};

const currentPageReducer = (state = initialState.currentPage, action: PokemonActionTypes) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  activePokemon: activePokemonReducer,
  currentPage: currentPageReducer,
});

export default rootReducer;
