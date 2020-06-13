import React from 'react';
import PropTypes from 'prop-types';
import { pokemonTypes } from 'utils/constants';

// Components

import { Title } from 'components/styleguide/DataGrid';
import { Container } from 'components';


// Component

const SectionEvolution = ({ type }) => (
  <section className="evolution">
    <Container>
      <Title type={type}>Nothing to show</Title>
    </Container>
  </section>
);

// Prop types

SectionEvolution.propTypes = {
  type: PropTypes.oneOf(pokemonTypes),
};

SectionEvolution.defaultProps = {
  type: 'normal',
};

export default SectionEvolution;
