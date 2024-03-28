import React from 'react';
import { screen, render } from '@testing-library/react';
import PokemonImage from '../components/PokemonImage.tsx';
import { Provider } from 'react-redux';
import store from '../redux/store.ts';

describe('PokemonImage Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <PokemonImage />
      </Provider>
    );
  });

  it('renders the default image when activePokemon is null', () => {
    render(
      <Provider store={store}>
        <PokemonImage />
      </Provider>
    );
    expect(screen.getByAltText('Pokeball')).toBeInTheDocument();
  });
});
