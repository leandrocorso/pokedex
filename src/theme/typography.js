import { css } from 'styled-components';

const typography = css`

    ${({ theme: { colors } }) => `
    
        .title { 
            color: ${colors['$text-grey']} 
            font-size: 6.25rem;
        }

    `}
`;

export default typography;
