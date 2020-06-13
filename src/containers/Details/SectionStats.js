import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pokemonTypes } from 'utils/constants';
import { keyNames } from 'utils/formatters';

// Components

import DataGrid, {
  List, Key, Item, Title,
} from 'components/styleguide/DataGrid';
import { ProgressBar, Container } from 'components';

// Styles

const StyledBaseStat = styled.span`
  margin-right: 20px;
  text-align: right;
  width: 40px;
`;


// Component

const SectionStats = ({ type }) => {
  const { details: { stats } } = useSelector((state) => state.pokemon);

  const totalStat = stats.reduce((count, stat) => (stat.base_stat + count), 0);

  return (
    <section className="stats">
      <Container>
        <DataGrid>
          <Title type={type}>Base Stats</Title>
          <List>

            { /* eslint-disable camelcase */
          stats.map(({ base_stat, stat: { name } }) => (
            <Item key={name}>
              <Key>{keyNames(name)}</Key>
              <StyledBaseStat>{base_stat}</StyledBaseStat>
              <ProgressBar value={base_stat} type={type} />
            </Item>
          ))
          /* eslint-disable camelcase */ }
            <Item>
              <Key>Total</Key>
              <StyledBaseStat>{totalStat}</StyledBaseStat>
              <ProgressBar value={0} type={type} />
            </Item>

          </List>
        </DataGrid>
      </Container>
    </section>
  );
};

// Prop types

SectionStats.propTypes = {
  type: PropTypes.oneOf(pokemonTypes),
};

SectionStats.defaultProps = {
  type: 'normal',
};

export default SectionStats;
