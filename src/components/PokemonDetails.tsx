import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SET_ACTIVE_POKEMON } from '../redux/actions.ts';
import TypePill from './TypePill.tsx';
import { capitalizeWithoutDash } from '../util/helper.ts';
import { Pokemon } from '../types/Pokemon.ts';

const PokemonDetails: React.FC = () => {
  const activePokemon: Pokemon | null = useSelector(
    (state: { activePokemon: Pokemon | null }) => state.activePokemon
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const goBack = () => {
    history.push('/');
    dispatch({ type: SET_ACTIVE_POKEMON, payload: null });
  };

  return (
    <div>
      <div className="top">
        <button onClick={goBack}>Go back</button>
      </div>
      <div className="body">
        <h1>{capitalizeWithoutDash(activePokemon?.name)}</h1>
        <h2>Types</h2>
        <p className="pills-wrapper">
          {activePokemon?.types.map((type) => (
            <TypePill type={type.type.name} />
          ))}
        </p>
        <h4>Base experience</h4>
        <p>{activePokemon?.base_experience}</p>
        <h4>Height</h4>
        <p>{activePokemon?.height}cm</p>
        <h4>Abilities</h4>
        <p>
          {activePokemon?.abilities
            .map((ab) => {
              return capitalizeWithoutDash(ab.ability.name);
            })
            .join(', ')}
        </p>
        <h2>Stats</h2>
        {activePokemon?.stats.map((stat) => {
          const statPercentage = (stat.base_stat / 255) * 100;
          return (
            <div className="progress-bar-wrapper" key={stat.stat.name}>
              <span>{capitalizeWithoutDash(stat.stat.name)}</span>
              <span className="progress-bar-number">{stat.base_stat}</span>
              <div className="progress-bar">
                <span className="progress-bar-fill" style={{ width: `${statPercentage}%` }}></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonDetails;
