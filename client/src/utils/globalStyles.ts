import { css, createGlobalStyle } from 'styled-components';

interface IColorGradient {
  first: string;
  last: string;
}

const backgrounds: IColorGradient[] = [
  { first: '#0f0c29', last: '#24243e' },
  { first: '#EB5757', last: '#000000' },
  { first: '#4b6cb7', last: '#182848' },
  { first: '#44A08D', last: '#093637' },
  { first: '#093028', last: '#237A57' }
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
    font-family: 'Lato';
    color: white;
  }

  .container {
    position: relative;
    display: grid;
    overflow-x: hidden;
    min-height: 100vh;
    max-width: 100vw;
    padding: 2rem;
    background: linear-gradient(${getBackground()}); 
    background-position: fixed;
  }

  section {
  padding-top: 12.5rem;
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
    z-index: 1;
  }
  li {
    list-style-type: none;
  }
`;

export const theme = {
  animation: {
    timeMain: '.375s'
  },
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
      background: none;
      font-size: 2.5rem;
      padding: 0.5rem;
      color: white;
      font-family: 'Lato';
    `,
    submit: css`
      padding: 1rem 3rem;
      text-align: center;
      text-transform: uppercase;
      border: 1px solid white;
      font-weight: 100;
      cursor: pointer;
    `
  },
  typo: {
    color: 'red'
  }
};
