import React from 'react';
import { screen, render } from '@testing-library/react';
import PokemonList from '../components/PokemonList.tsx';
import { Provider } from 'react-redux';
import store from '../redux/store.ts';

describe('PokemonList Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    );
  });

  it('renders the next and previous buttons', () => {
    render(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    );
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });
});
