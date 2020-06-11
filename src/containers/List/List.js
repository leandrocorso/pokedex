import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// Actions
import { getAll } from 'store/pokemon/actions';

// Components
import {
  Container,
  Description,
  PokemonListItem,
  SearchForm,
} from 'components';

const PokemonList = styled.ul`${({ theme: { colors } }) => `
`}`;

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, list } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <Container>
      <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
      <SearchForm />

      {
        list.length && !isLoading
          && (
            <PokemonList>
              { list.map((p) => <PokemonListItem key={p.name} pokemon={p} />) }
            </PokemonList>
          )
      }
    </Container>
  );
};

export default List;
