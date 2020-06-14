import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// Components

import {} from 'components';
import pokeball from 'assets/patterns/pokeball.svg';

// Actions

import { setSection } from 'store/pokemon/actions';

// Styles

const StyledNav = styled.nav`${({ theme: { spacing } }) => `
    position: relative;
    padding: ${spacing['$container-padding']};
    padding-bottom: ${spacing['$default-spacing']};
`}`;

const StyledMenu = styled.ul`
    display:flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
`;

const StyledButton = styled.button`${({ theme: { colors } }) => `
    background: transparent;
    color: ${colors['$text-white']};
    font-size: 1rem;
    opacity: 0.5;

    &.active {
      font-weight: 700;
      opacity: 1;
    }
`}`;

const StyledPokeball = styled.div`${({ posX, rotation, theme: { colors } }) => `
    background: ${colors['$gradient-vector-white']};
    height: 100px;
    left: ${`${posX - 50}px`};
    mask-image: url(${pokeball});
    mask-repeat: no-repeat;
    mask-size: cover;
    position: absolute;
    width: 100px;
    top: 23px;
    transform: rotate(${rotation}deg);
    transition: all .5s ease-out;
    z-index: 0;
`}`;

// Component

const Menu = () => {
  const dispatch = useDispatch();
  const about = useRef(null);
  const stats = useRef(null);
  const evolution = useRef(null);
  const animatePokeball = useRef(null);
  // Pokeball position
  const [pokeballX, setPokeballX] = useState(0);
  const [pokeballRotation, setPokeballRotation] = useState(-90);
  // Section
  const { section } = useSelector((state) => state.pokemon);

  // Pokeball position
  useEffect(() => {
    const { x, width } = about.current.getBoundingClientRect();
    setPokeballX((x + (width / 2)));
    setPokeballRotation(0);
  }, []);

  // section
  useEffect(() => {
    if (!section) dispatch(setSection('about'));
  }, [section, dispatch]);

  const handleContent = ({ target }, { current }) => {
    // Pressed button attributes
    const { x, width } = current.getBoundingClientRect();
    const currentCenter = x + (width / 2);
    // Root container width
    const rootWidth = document.getElementById('root').getBoundingClientRect().width;
    // Pokeball position
    const pokeballPosX = currentCenter - ((window.innerWidth - rootWidth) / 2);
    const pokeballR = pokeballX >= pokeballPosX ? pokeballRotation - 180 : pokeballRotation + 180;
    setPokeballX(pokeballPosX);
    setPokeballRotation(pokeballR);
    // change section
    dispatch(setSection(target.name));
  };

  return (
    <StyledNav>
      <StyledMenu>

        <li>
          <StyledButton
            ref={about}
            name="about"
            onClick={(e) => handleContent(e, about)}
            className={section === 'about' && 'active'}
          >
            About
          </StyledButton>
        </li>

        <li>
          <StyledButton
            ref={stats}
            name="stats"
            onClick={(e) => handleContent(e, stats)}
            className={section === 'stats' && 'active'}
          >
            Stats
          </StyledButton>
        </li>

        <li>
          <StyledButton
            ref={evolution}
            name="evolution"
            onClick={(e) => handleContent(e, evolution)}
            className={section === 'evolution' && 'active'}
          >
            Evolution
          </StyledButton>
        </li>

      </StyledMenu>
      <StyledPokeball posX={pokeballX} rotation={pokeballRotation} ref={animatePokeball} />
    </StyledNav>
  );
};

export default Menu;
