import React from 'react';
import styled from 'styled-components';

// Components
import {
  Container,
  Description,
  SearchForm,
} from 'components';

const PokemonList = styled.ul`${({ theme: { colors } }) => `
`}`;

const PokemonListItem = styled.ul`${({ theme: { colors } }) => `
`}`;

const List = () => (
  <Container>
    <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
    <SearchForm />
    <PokemonList>
      <PokemonListItem />
    </PokemonList>
  </Container>
);

export default List;
