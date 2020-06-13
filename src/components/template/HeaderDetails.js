import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// Components

import { PokemonName, Icon } from 'components';

// Styles

const StyledHeader = styled.div`${({ theme: { spacing } }) => `
  padding: ${spacing['$container-padding']};

`}`;

const StyledPokemonName = styled(PokemonName)`${({ theme: { colors, spacing } }) => `
  text-align: center;
  color: ${colors['$text-white']};
`}`;

const StyledNav = styled.nav`${({ theme: { colors, spacing } }) => `
  position: absolute;
  top: ${spacing['$container-padding']};

  svg path {
    fill: ${colors['$text-white']};
  }
`}`;

const StyledButton = styled.button`
  background: transparent;
`;

// Component

const HeaderDetails = ({ name }) => {
  const history = useHistory();
  return (
    <StyledHeader>
      <StyledPokemonName>{name}</StyledPokemonName>
      <StyledNav>
        <ul>
          <li>
            <StyledButton onClick={() => history.goBack()}>
              <Icon type="arrowLeft" />
            </StyledButton>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

// Prop types

HeaderDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HeaderDetails;
