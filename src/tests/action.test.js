import { setPokemonList, setActivePokemon, setCurrentPage } from '../redux/actions.ts';

describe('Redux Action Creators', () => {
  it('should create an action to set the pokemon list', () => {
    const pokemonList = [{ name: 'Pikachu' }, { name: 'Charmander' }];
    const expectedAction = {
      type: 'SET_POKEMON_LIST',
      payload: pokemonList,
    };
    expect(setPokemonList(pokemonList)).toEqual(expectedAction);
  });

  it('should create an action to set the active pokemon', () => {
    const pokemon = { name: 'Pikachu' };
    const expectedAction = {
      type: 'SET_ACTIVE_POKEMON',
      payload: pokemon,
    };
    expect(setActivePokemon(pokemon)).toEqual(expectedAction);
  });

  it('should create an action to set the current page', () => {
    const page = 1;
    const expectedAction = {
      type: 'SET_CURRENT_PAGE',
      payload: page,
    };
    expect(setCurrentPage(page)).toEqual(expectedAction);
  });
});
