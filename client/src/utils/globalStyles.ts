import { css, createGlobalStyle } from 'styled-components';

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
  flexin: (
    jc: string = `center`,
    ai: string = `center`,
    fd: string = `row`,
    fw: string = `wrap`
  ): string =>
    css`
      display: flex;
      justify-content: ${jc};
      align-items: ${ai};
      flex-direction: ${fd};
      flex-wrap: ${fw};
    `,
  typo: {
    color: 'red'
  }
};
