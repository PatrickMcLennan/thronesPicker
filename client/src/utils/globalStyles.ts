import { css, createGlobalStyle } from 'styled-components';

interface IColorGradient {
  first: string;
  last: string;
}

const backgrounds: IColorGradient[] = [
  { first: '#2980B9', last: '#6DD5FA' },
  { first: '#36D1DC', last: '#5B86E5' },
  { first: '#EF3B36', last: '#FFFFFF' },
  { first: '#1f4037', last: '#99f2c8' },
  { first: '#334d50', last: '#cbcaa5' }
];

const getBackground: Function = (): string => {
  const gradient: IColorGradient =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  return `${gradient.first}, ${gradient.last}`;
};

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
    font-family: 'Lato'
  }

  .container {
    position: relative;
    display: grid;
    overflow-x: hidden;
    min-height: 100vh;
    max-width: 100vw;
    padding: 2rem;
    background: linear-gradient(${getBackground()}); 
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
  li {
    list-style-type: none;
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
  colors: {
    success: '#00b894',
    error: '#d63031'
  },
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
