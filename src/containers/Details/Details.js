import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// Components

import { HeaderDetails } from 'components';
import pattern from 'assets/patterns/10x5.svg';
import Menu from './Menu';
import SectionAbout from './SectionAbout';
import SectionStats from './SectionStats';
import SectionEvolution from './SectionEvolution';

// Styles

const StyledDetails = styled.div`${({ type, theme: { colors } }) => `
    background-color: ${colors[`$background-type-${type}`]};
`}`;

const StyedPattern = styled.span`${({ theme: { colors } }) => `
  background: ${colors['$gradient-vector-white']};
  mask-image: url(${pattern});
  mask-repeat: no-repeat;
  mask-size: cover;
  height: 65px;
  position: absolute;
  right: -80px;
  top: 27px;
  width: 150px;
`}`;

const StyledBody = styled.div`${({ theme: { colors, spacing } }) => `
  background-color: ${colors['$background-default']};
  border-top-left-radius: ${spacing['$container-padding']};
  border-top-right-radius: ${spacing['$container-padding']};
  overflow: hidden;
  position: relative;
`}`;

const StyledWrapper = styled.div`${({ position }) => `
  display: inline-flex;
  position: relative;
  left: -${position}px;
  transition: all .3s ease-out;

  section {
    width: 410px;
  }
`}`;


// Component

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState('');
  const [sectionPos, setSectionPos] = useState(0);
  const { details, section } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (Object.keys(details).length > 0) {
      setPokemon(details);
    }
  }, [details]);

  // Sections navegation
  useEffect(() => {
    if (section === 'about') {
      setSectionPos(0);
    } else if (section === 'stats') {
      setSectionPos(410);
    } else if (section === 'evolution') {
      setSectionPos(820);
    }
  }, [section]);

  if (pokemon) {
    const { types } = pokemon;
    const type = types[0].type.name;

    return (
      <StyledDetails type={type}>

        <StyedPattern />
        <HeaderDetails name={name} />
        <Menu />

        <StyledBody>
          <StyledWrapper position={sectionPos}>
            <SectionAbout type={type} />
            <SectionStats type={type} />
            <SectionEvolution type={type} />
          </StyledWrapper>
        </StyledBody>

      </StyledDetails>
    );
  }
  return '';
};

export default Details;
