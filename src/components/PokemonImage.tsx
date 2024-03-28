import React from 'react';
import { useSelector } from 'react-redux';
import pokeball from '../images/pokeball.png';
import { Pokemon } from '../types/Pokemon.ts';

const PokemonImage: React.FC = () => {
  const activePokemon: Pokemon | null = useSelector(
    (state: { activePokemon: Pokemon | null }) => state.activePokemon
  );

  return (
    <div className="pokemon-image-wrapper">
      {activePokemon ? (
        <img
          className="pokemon-image"
          src={activePokemon.sprites.front_default}
          alt={activePokemon.name}
        />
      ) : (
        <img className="pokemon-image" src={pokeball} alt="Pokeball" />
      )}
    </div>
  );
};

export default PokemonImage;
