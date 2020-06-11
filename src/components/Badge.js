import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pokemonTypes } from 'utils/constants';
import Icon from 'components/Icon';


const StyledBadge = styled.div`${({ type, theme: { colors } }) => `
    align-items: center;    
    background-color: ${colors[`$type-${type}`]};
    border-radius: 0.188rem;
    color: ${colors['$text-white']};
    display: flex;
    font-size: 0.75rem;
    height: 1.563rem;
    line-height: 0.875rem;
    padding: 0 0.313rem;
    width: fit-content;

    svg {
        margin-right: 0.2rem;
        max-height: 1rem;
        max-width: 1rem;
        
        path {
            fill: ${colors['$text-white']}
        }
    }
`}`;

const Badge = ({ type, children }) => (
  <StyledBadge type={type}>
    <Icon type={type} />
    {children}
  </StyledBadge>
);

Badge.propTypes = {
  type: PropTypes.oneOf(pokemonTypes),
  children: PropTypes.string.isRequired,
};

Badge.defaultProps = {
  type: 'normal',
};

export default Badge;
