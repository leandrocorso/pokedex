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
  height:100vw;
  mask-image: url(${pokeball});
  mask-repeat: no-repeat;
  mask-size: cover;
  position: absolute;
  top: -50vw;
  width: 100vw;
  z-index: -1;
`}`;

const Nav = styled.nav`${({ theme: { spacing } }) => `
  padding-bottom: ${spacing['$container-padding']};
`}`;

const NavList = styled.ul`${({ theme: { colors } }) => `
  display: flex;
  justify-content: flex-end;
`}`;

const NavItem = styled.li`${({ theme: { spacing } }) => `
  margin-left: ${spacing['$half-spacing']}
`}`;

const Header = () => (
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

export default Header;
