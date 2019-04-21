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
    display: grid;
    overflow-x: hidden;
    min-height: 100vh;
    max-width: 100vw;
    padding: 2rem;
    background: black; 
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-self: stretch;
    justify-self: stretch;
    border-radius: .015%;
    height: 100%;
    width: 100%;
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
  inputs: {
    inputsMain: css`
      text-align: right;
      border: none;
      border-bottom: 1px solid white;
    `
  },
  typo: {
    color: 'red'
  }
};
