import styled from 'styled-components';

export default styled.p`${({ theme: { colors } }) => `
    font-size: 0.875rem;
    font-weight: 700;
    color: ${colors['$text-black']}
`}`;
