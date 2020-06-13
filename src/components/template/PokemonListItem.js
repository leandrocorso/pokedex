import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// Actions
import { setDetails } from 'store/pokemon/actions';

// Compoments
import { Badge, PokemonName, PokemonNumber } from 'components';
import pattern from 'assets/patterns/6x3.svg';
import pokeball from 'assets/patterns/pokeball.svg';

// Styles
const StyledItem = styled.li`${({ type, theme: { colors, spacing } }) => `
    background-color: ${colors[`$background-type-${type}`]};
    border-radius: ${spacing['$pokemon-list-radius']};
    height: ${spacing['$pokemon-list-height']};
    margin: 30px 0;
    padding: ${spacing['$pokemon-list-padding']};
    position: relative;
`}`;

const TypesList = styled.ul`${({ theme: { spacing } }) => `
    display: flex;
    
    li {
        margin-right: ${spacing['$half-spacing']}
    }
`}`;

const StyledPattern = styled.span`${({ theme: { colors } }) => `
    background: ${colors['$gradient-vector']};
    mask-image: url(${pattern});
    mask-repeat: no-repeat;
    mask-size: cover;
    height: 32px;
    left: 90px;
    position: absolute;
    top: 5px;
    width: 74px;
`}`;

const StyledPokeball = styled.span`${({ theme: { colors } }) => `
    background: ${colors['$gradient-vector']};
    mask-image: url(${pokeball});
    mask-repeat: no-repeat;
    mask-size: cover;
    height: 145px;
    position: absolute;
    right: -15px;
    top: -15px;
    width: 145px;
`}`;

const StyledImage = styled.img`
  bottom: 10px;
  position: absolute;
  right: 0;
`;

const StyledButton = styled.button`
  background: transparent;
  cursor: pointer;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const StyledPokemonName = styled(PokemonName)`${({theme: {colors}}) => `
    color: ${colors['$text-white']}
`}`

// Component

const PokemonListItem = ({ pokemon }) => {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { id, name, types } = pokemon;

  const typeList = types.map(({ type }) => type.name);

  useEffect(() => {
    const loadImage = async () => {
      const image = await import(`assets/images/${id}.png`).then((i) => i.default);
      setImage(image);
    }
    loadImage();
  }, [id]);

  const handleSelect = () => {
    dispatch(setDetails(pokemon));
    history.push(`/${name}`);
  };

  return (

    <StyledItem type={typeList[0]} name={name}>

      <StyledButton type="button" onClick={handleSelect} />

      <StyledPattern />
      <StyledPokeball />
      <StyledImage src={image} alt={name} />

      <PokemonNumber>
        #
        {`${id}`.padStart(3, 0)}
      </PokemonNumber>

      <StyledPokemonName>{name}</StyledPokemonName>

      <TypesList>
        {
          typeList.map((t) => <li key={`${name}-${t}`}><Badge type={t}>{t}</Badge></li>)
        }
      </TypesList>
    </StyledItem>
  );
};

// Prop types

PokemonListItem.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default PokemonListItem;
