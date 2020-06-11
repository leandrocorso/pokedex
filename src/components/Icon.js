import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Pokemon types
import { ReactComponent as TypeBug } from 'assets/icons/pokemonTypes/bug.svg';
import { ReactComponent as TypeDark } from 'assets/icons/pokemonTypes/dark.svg';
import { ReactComponent as TypeDragon } from 'assets/icons/pokemonTypes/dragon.svg';
import { ReactComponent as TypeElectric } from 'assets/icons/pokemonTypes/electric.svg';
import { ReactComponent as TypeFairy } from 'assets/icons/pokemonTypes/fairy.svg';
import { ReactComponent as TypeFighting } from 'assets/icons/pokemonTypes/fighting.svg';
import { ReactComponent as TypeFire } from 'assets/icons/pokemonTypes/fire.svg';
import { ReactComponent as TypeFlying } from 'assets/icons/pokemonTypes/flying.svg';
import { ReactComponent as TypeGhost } from 'assets/icons/pokemonTypes/ghost.svg';
import { ReactComponent as TypeGrass } from 'assets/icons/pokemonTypes/grass.svg';
import { ReactComponent as TypeGround } from 'assets/icons/pokemonTypes/ground.svg';
import { ReactComponent as TypeIce } from 'assets/icons/pokemonTypes/ice.svg';
import { ReactComponent as TypeNormal } from 'assets/icons/pokemonTypes/normal.svg';
import { ReactComponent as TypePoison } from 'assets/icons/pokemonTypes/poison.svg';
import { ReactComponent as TypePsychic } from 'assets/icons/pokemonTypes/psychic.svg';
import { ReactComponent as TypeRock } from 'assets/icons/pokemonTypes/rock.svg';
import { ReactComponent as TypeSteel } from 'assets/icons/pokemonTypes/steel.svg';
import { ReactComponent as TypeWater } from 'assets/icons/pokemonTypes/water.svg';

// Pokemon Heights
import { ReactComponent as HeightShort } from 'assets/icons/pokemonHeights/short.svg';
import { ReactComponent as HeightMedium } from 'assets/icons/pokemonHeights/medium.svg';
import { ReactComponent as HeightTall } from 'assets/icons/pokemonHeights/tall.svg';

// Pokemon Weights
import { ReactComponent as WeightLight } from 'assets/icons/pokemonWeights/light.svg';
import { ReactComponent as WeightNormal } from 'assets/icons/pokemonWeights/normal.svg';
import { ReactComponent as WeightHeavy } from 'assets/icons/pokemonWeights/heavy.svg';

const iconTypes = {
  // types
  bug: TypeBug,
  dark: TypeDark,
  dragon: TypeDragon,
  electric: TypeElectric,
  fairy: TypeFairy,
  fighting: TypeFighting,
  fire: TypeFire,
  flying: TypeFlying,
  ghost: TypeGhost,
  grass: TypeGrass,
  ground: TypeGround,
  ice: TypeIce,
  normal: TypeNormal,
  poison: TypePoison,
  psychic: TypePsychic,
  rock: TypeRock,
  steel: TypeSteel,
  water: TypeWater,
  // Heights
  hShort: HeightShort,
  hMedium: HeightMedium,
  hTall: HeightTall,
  // Weights
  wLight: WeightLight,
  wNormal: WeightNormal,
  wHeavy: WeightHeavy,
};

// Populating prop types
const iconKeys = Object.keys(iconTypes);

const StyledIcon = styled.div`${({ selected }) => `
  align-items: center;
  display: flex;
  justify-content: center;    
  height: 25px;
  width: 25px;

  ${selected && `
    border-radius: 25px; 
    height: 50px;
    width: 50px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  `}

  svg {
    height: auto;
    width: fit-content;
  }
`}`;

const IconComponent = ({ type, selected, className }) => {
  const Icon = iconTypes[type];
  return (
    <StyledIcon
      className={className}
      selected={selected}
    >
      <Icon />
    </StyledIcon>
  );
};

IconComponent.propTypes = {
  type: PropTypes.oneOf(iconKeys),
  selected: PropTypes.bool,
  className: PropTypes.string,
};

IconComponent.defaultProps = {
  type: 'normal',
  selected: false,
  className: '',
};

export default IconComponent;
