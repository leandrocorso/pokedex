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

// Navegation icons
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as Filter } from 'assets/icons/filter.svg';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import { ReactComponent as Sort } from 'assets/icons/sort.svg';

const iconTypes = {
  // Pokemon types
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
  // Pokemon Heights
  hShort: HeightShort,
  hMedium: HeightMedium,
  hTall: HeightTall,
  // Pokemon Weights
  wLight: WeightLight,
  wNormal: WeightNormal,
  wHeavy: WeightHeavy,
  // Navegation icons
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  filter: Filter,
  menu: Menu,
  search: Search,
  sort: Sort,
};

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

const Icon = ({ type, selected, className }) => {
  const SelectedIcon = iconTypes[type];
  return (
    <StyledIcon
      className={className}
      selected={selected}
    >
      <SelectedIcon />
    </StyledIcon>
  );
};

// Prop types

const iconKeys = Object.keys(iconTypes);

Icon.propTypes = {
  type: PropTypes.oneOf(iconKeys),
  selected: PropTypes.bool,
  className: PropTypes.string,
};

Icon.defaultProps = {
  type: 'normal',
  selected: false,
  className: '',
};

export default Icon;
