import styled from 'styled-components';

export default styled.h4`${({ theme: { colors } }) => `
    font-size: 1rem;
    font-weight: 700;
    color: ${colors['$text-black']}
`}`;
