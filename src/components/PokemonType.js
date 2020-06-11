import styled from 'styled-components';

export default styled.div`${({ theme: { colors } }) => `
    font-size: 0.875rem;
    font-weight: 500;
    color: ${colors['$text-black']}
`}`;
