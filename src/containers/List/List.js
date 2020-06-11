import React from 'react';

// Components
import {
  AppTitle,
  Badge,
  Description,
  FilterTitle,
  PokemonIcon,
  PokemonName,
  PokemonNumber,
  PokemonType,
  Title,
} from 'components';

const List = () => (
  <>
    <Title>List</Title>
    <AppTitle>Aplication title</AppTitle>
    <PokemonName>Pokemon Name</PokemonName>
    <FilterTitle>Filter title</FilterTitle>
    <Description>Description</Description>
    <PokemonNumber>PokemonNumber</PokemonNumber>
    <PokemonType>PokemonType</PokemonType>
    <Badge type="fire">Fire</Badge>
    <Badge type="electric">Electric</Badge>
    <PokemonIcon type="normal" />
    <PokemonIcon type="fairy" selected />
    <PokemonIcon type="fire" />
    <PokemonIcon type="hShort" />
    <PokemonIcon type="hMedium" />
    <PokemonIcon type="hTall" />
    <PokemonIcon type="hShort" selected />
    <PokemonIcon type="hMedium" selected />
    <PokemonIcon type="hTall" selected />
    <PokemonIcon type="wLight" />
    <PokemonIcon type="wNormal" />
    <PokemonIcon type="wHeavy" />
    <PokemonIcon type="wLight" selected />
    <PokemonIcon type="wNormal" selected />
    <PokemonIcon type="wHeavy" selected />
  </>
);

export default List;
