import React, { useState } from 'react';
import styled from 'styled-components';

import { Icon } from 'components';

const StyledInput = styled.div`${({ theme: { colors, spacing, transitions } }) => `
    align-items: center;
    background-color: ${colors['$background-default-input']};
    border-radius: ${spacing['$input-radius']};
    display: flex;
    height: 3.75rem;
    margin-top: ${spacing['$section-margin']};
    margin-bottom: ${spacing['$section-margin']};
    padding-right: ${spacing['$default-spacing']};
    transition: ${transitions['$default-transition']};

    &:focus-within {
        background-color: ${colors['$text-field-focused-background']};
    }

    input {
        background: transparent;
        color: ${colors['$text-field-default-text']};
        font-size: 1rem;
        width: 100%;

        &::placeholder {
            color: ${colors['$text-field-default-placeholder']};
        }
    
        &:focus {
            caret-color: ${colors['$text-field-focused-cursor']};
            color: ${colors['$text-field-focused-text']};
            
            &::placeholder {
                color: ${colors['$text-field-focused-placeholder']};
            }
            
        }
    }
`}`;

const StyledIcon = styled(Icon)`${({ theme: { colors, spacing } }) => `
    width: 1rem;
    height: 1rem;
    margin-left: 27px;
    margin-right: 12px;

    svg {
        width: 100%;
        height: 100%;

        path {
            fill: ${colors['$text-grey']}
        }
    }
`}`;

const SearchForm = () => {
  const [keyWord, setKeyWord] = useState('');

  return (
    <StyledInput className="search-form">
      <StyledIcon type="search" />
      <input
        type="text"
        value={keyWord}
        onChange={(e) => setKeyWord(e.target.value)}
        placeholder="What Pokémon are you looking for?"
      />
    </StyledInput>
  );
};

export default SearchForm;
