import styled from 'styled-components';

export default styled.h2`${({ theme: { colors } }) => `
    font-size: 2rem;
    font-weight: 700;
    color: ${colors['$text-black']};
`}`;
