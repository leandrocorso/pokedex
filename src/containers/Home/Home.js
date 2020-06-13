import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getAll } from 'store/pokemon/actions';

// Components
import {
  Container,
  Description,
  HeaderDefault,
  PokemonListItem,
  SearchForm,
} from 'components';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, list } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <>
      <HeaderDefault />
      <Container>
        <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
        <SearchForm />
        {
        list.length > 0 && !isLoading
          && (
            <ul>
              { list.map((p) => <PokemonListItem key={p.name} pokemon={p} />) }
            </ul>
          )
      }
      </Container>
    </>
  );
};

export default Home;
