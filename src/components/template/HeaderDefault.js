import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Icon, AppTitle } from 'components';

import pokeball from 'assets/patterns/pokeball.svg';

const StyledHeader = styled.div`${({ theme: { spacing } }) => `
  padding: ${spacing['$container-padding']};
  padding-bottom: 0;
  margin-bottom: -${spacing['$container-padding']};
`}`;

const StyledPokeball = styled.span`${({ theme: { colors } }) => `
  background: ${colors['$gradient-pokeball']};
  height:205px;
  mask-image: url(${pokeball});
  mask-position-y: -205px;
  mask-repeat: no-repeat;
  mask-size: cover;
  position: absolute;
  width: 100%;
  z-index: -1;
`}`;

const Nav = styled.nav`${({ theme: { spacing } }) => `
  padding-bottom: ${spacing['$container-padding']};
`}`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const NavItem = styled.li`${({ theme: { spacing } }) => `
  margin-left: ${spacing['$half-spacing']}
`}`;

const HeaderDefault = () => (
  <>
    <StyledPokeball />
    <StyledHeader>
      <Nav>
        <NavList>
          <NavItem><Link to="/"><Icon type="menu" /></Link></NavItem>
          <NavItem><Link to="/"><Icon type="sort" /></Link></NavItem>
          <NavItem><Link to="/"><Icon type="filter" /></Link></NavItem>
        </NavList>
      </Nav>
      <AppTitle>Pokédex</AppTitle>
    </StyledHeader>
  </>
);

export default HeaderDefault;
