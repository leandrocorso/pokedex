import styled from 'styled-components';

export default styled.h1`${({ theme: { colors } }) => `
    font-size: 6.25rem;
    font-weight: 700;
    color: ${colors['$text-black']}
`}`;
