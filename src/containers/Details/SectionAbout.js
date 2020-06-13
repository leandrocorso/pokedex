import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pokemonTypes } from 'utils/constants';

// Components

import DataGrid, {
  List, Key, Item, Title,
} from 'components/styleguide/DataGrid';
import { Container } from 'components';

// Styles

const StyledHidedAbilities = styled.li`
  font-size: 0.75rem;
`;

// Component

const SectionAbout = ({ type }) => {
  const { details } = useSelector((state) => state.pokemon);


  const showedAbilities = details.abilities.map((a, i) => !a.is_hidden
  && (
  <li key={`ability-${a.ability.name}`}>
    {`${i + 1}. ${a.ability.name}`}
  </li>
  ));

  const hidedAbilities = details.abilities.map((a) => a.is_hidden
  && (
  <StyledHidedAbilities key={`ability-${a.ability.name}`}>
    {`${a.ability.name} (hidden ability)`}
  </StyledHidedAbilities>
  ));

  return (
    <section className="about">
      <Container>
        <DataGrid>
          <Title type={type}>Pokedéx Data</Title>
          <List>
            <Item>
              <Key>Abilities</Key>
              <ul>
                {showedAbilities}
                {hidedAbilities}
              </ul>
            </Item>
          </List>
        </DataGrid>
      </Container>
    </section>
  );
};

// Prop types

SectionAbout.propTypes = {
  type: PropTypes.oneOf(pokemonTypes),
};

SectionAbout.defaultProps = {
  type: 'normal',
};

export default SectionAbout;
