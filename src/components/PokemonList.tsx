import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ACTIVE_POKEMON, SET_CURRENT_PAGE } from '../redux/actions.ts';
import { useHistory } from 'react-router-dom';
import { capitalizeWithoutDash } from '../util/helper.ts';
import { Pokemon } from '../types/Pokemon.ts';

const PokemonList: React.FC = () => {
  const [pokeList, setPokeList] = useState<Pokemon[]>([]);
  const page: number = useSelector((state: { currentPage: number }) => state.currentPage);
  const [isError, setIsError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const pageSize = 20;
  const maxPokemons = 151;
  const maxPages = Math.round(151 / pageSize);

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const fetchPokemon = async (): Promise<void> => {
    try {
      const start = (page - 1) * pageSize + 1;
      const end = page * pageSize > maxPokemons ? maxPokemons : page * pageSize;
      const response: Response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${end - start + 1}&offset=${start - 1}`
      );
      const data: { results: Pokemon[] } = await response.json();
      setPokeList(data.results);
    } catch (e) {
      setIsError(true);
    }
  };

  const handleNext = () => {
    if (page < maxPages) {
      dispatch({ type: SET_CURRENT_PAGE, payload: page + 1 });
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      dispatch({ type: SET_CURRENT_PAGE, payload: page - 1 });
    }
  };

  const selectPokemon = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      dispatch({ type: SET_ACTIVE_POKEMON, payload: data });
      setIsError(false);
    } catch (e) {
      setIsError(true);
    }
  };

  const goToDetails = () => {
    history.push('/details');
  };

  if (isError) {
    return <p>Error in the server, please try again</p>;
  }

  return (
    <div>
      <div className="button-wrapper">
        <button onClick={handlePrevious} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={page === maxPages}>
          Next
        </button>
      </div>
      <div className="list-wrapper">
        {pokeList.map((poke) => (
          <div
            key={poke.name}
            className="list-element"
            onClick={() => {
              selectPokemon(poke.url);
            }}
            onDoubleClick={goToDetails}
          >
            {capitalizeWithoutDash(poke.name)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
