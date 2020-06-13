import styled from 'styled-components';

export default styled.div`${({ type, value, theme: { colors } }) => `
  border-radius: 2px;
  height: 4px; 
  overflow: hidden;
  position: relative;
  width: 100%;
  
  &::before {
    background-color: ${colors[`$type-${type}`]};
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    content: '';
    height: 4px;
    left: 0;
    position: absolute;
    top: 0;
    width: ${value}%;
  }
`}`;
