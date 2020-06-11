import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pokemonTypes, pokemonHeights, pokemonWeights } from 'utils/constants';
import Icon from './Icon';

const StyledIcon = styled(Icon)`${({
  selected, color, theme: { colors },
}) => `
  svg path {
    fill: ${colors[color]}
  }
  ${selected && `
    background-color: ${colors[color]};

    svg path {
      fill: ${colors['$text-white']}
    }
  `}
`}`;

const PokemonIcon = ({ type, selected }) => {
  let color = '$primary';
  color = pokemonTypes.indexOf(type) > -1 ? `$type-${type}` : color;
  color = pokemonHeights.indexOf(type) > -1 ? `$height-${type}` : color;
  color = pokemonWeights.indexOf(type) > -1 ? `$weight-${type}` : color;
  return <StyledIcon type={type} selected={selected} color={color} />;
};

// Prop types

const iconTypes = pokemonTypes.concat(pokemonHeights, pokemonWeights);

PokemonIcon.propTypes = {
  type: PropTypes.oneOf(iconTypes),
  selected: PropTypes.bool,
};

PokemonIcon.defaultProps = {
  type: 'normal',
  selected: false,
};

export default PokemonIcon;
