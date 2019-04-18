import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  .container {
    position: relative;
    overflow-x: hidden;
  }
`;

export const theme = {
  typo: {
    color: 'red'
  }
};
