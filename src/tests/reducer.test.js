import rootReducer from '../redux/reducers.ts';
import { SET_POKEMON_LIST, SET_ACTIVE_POKEMON, SET_CURRENT_PAGE } from '../redux/actions.ts';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      pokemonList: [],
      activePokemon: null,
      currentPage: 1,
    });
  });

  it('should handle SET_POKEMON_LIST', () => {
    const pokemonList = [{ name: 'Pikachu' }, { name: 'Charmander' }];
    expect(rootReducer(undefined, { type: SET_POKEMON_LIST, payload: pokemonList })).toEqual({
      pokemonList,
      activePokemon: null,
      currentPage: 1,
    });
  });

  it('should handle SET_ACTIVE_POKEMON', () => {
    const pokemon = { name: 'Pikachu', id: 25 };
    expect(rootReducer(undefined, { type: SET_ACTIVE_POKEMON, payload: pokemon })).toEqual({
      pokemonList: [],
      activePokemon: pokemon,
      currentPage: 1,
    });
  });

  it('should handle SET_CURRENT_PAGE', () => {
    const page = 3;
    expect(rootReducer(undefined, { type: SET_CURRENT_PAGE, payload: page })).toEqual({
      pokemonList: [],
      activePokemon: null,
      currentPage: page,
    });
  });
});
