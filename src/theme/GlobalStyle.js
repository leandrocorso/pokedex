import { createGlobalStyle } from 'styled-components';
import typography from './typography';

export default createGlobalStyle`

    @font-face {
        font-family: "SF Display";
        font-weight: 700;
        src: url("https://sf.abarba.me/SF-UI-Display-Bold.otf");
    }

    @font-face {
        font-family: "SF Display";
        font-weight: 400;
        src: url("https://sf.abarba.me/SF-UI-Display-Regular.otf");
    }

    @font-face {
        font-family: "SF Display";
        font-weight: 500;
        src: url("https://sf.abarba.me/SF-UI-Display-Medium.otf");
    }

    ${({ theme: { fonts, colors } }) => `

        body {
            font-family: ${fonts['$font-primary']};
            color: ${colors['$text-black']}
        }

    `}

    ${typography}


`;
