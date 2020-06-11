import styled from 'styled-components';

export default styled.p`${({ theme: { colors } }) => `
    font-size: 1rem;
    font-weight: 400;
    color: ${colors['$text-black']}
`}`;
