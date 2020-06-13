import { createGlobalStyle } from 'styled-components';

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

    ${({ theme: { fonts, colors, spacing } }) => `

        * {
            border: 0;
            margin: 0;
            padding: 0;
            list-style: none;
            outline: 0;
        }

        body {
            background-color: ${colors['$background-default']};
            color: ${colors['$text-black']};
            font-family: ${fonts['$font-primary']};
        }

        #root {
            max-width: 410px;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
        }

        p {
            margin-top: ${spacing['$paragraph-spacing']};
            margin-bottom: ${spacing['$paragraph-spacing']};
        }

    `}


`;
