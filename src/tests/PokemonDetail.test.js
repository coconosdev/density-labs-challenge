import React from 'react';
import { screen, render } from '@testing-library/react';
import PokemonDetails from '../components/PokemonDetails.tsx';
import { Provider } from 'react-redux';
import store from '../redux/store.ts';

describe('PokemonDetails Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <PokemonDetails />
      </Provider>
    );
  });

  it('renders the go back button', () => {
    render(
      <Provider store={store}>
        <PokemonDetails />
      </Provider>
    );
    expect(screen.getByText('Go back')).toBeInTheDocument();
  });
});
