import styled from 'styled-components';

export default styled.span`${({ theme: { colors } }) => `
    font-size: 0.75rem;
    font-weight: 700;
    color: ${colors['$text-number']}
`}`;
