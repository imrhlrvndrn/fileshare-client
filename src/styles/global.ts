import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }

    html,
    body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,
    input {
        border: none;
    }

    button {
        cursor: pointer;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
    }
`;
