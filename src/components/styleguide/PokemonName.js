import styled from 'styled-components';

export default styled.h3`${({ theme: { colors } }) => `
    font-size: 1.625rem;
    font-weight: 700;
    color: ${colors['$text-black']};
    text-transform: capitalize;
`}`;
