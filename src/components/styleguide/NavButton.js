import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { navIcons } from 'utils/constants';
import Icon from './Icon';

const StyledLink = styled(Link)`${({ theme: { colors } }) => `
    background: transparent
`}`;

const NavButton = ({ to, type }) => (
  <StyledLink to={to}>
    <Icon type={type} />
  </StyledLink>
);

// Prop types

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(navIcons).isRequired,
};

export default NavButton;
