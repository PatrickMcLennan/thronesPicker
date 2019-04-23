import styled, { css, keyframes } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

const animateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const StyledSection = styled.section`
  ${({ theme: { flexin } }: any) => flexin('space-evenly', 'center', 'column')}
  border: 1px solid white;
  opacity: 1;
  transform: translateY(0);

  ${(props: IProps) =>
    !props.triggerAnimation &&
    css`
      animation: ${animateOut} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}
`;

export const StyledH1 = styled.h1`
  font-size: 6.25vw;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.25rem;
  font-weight: 100;
  margin: 3rem 0;
  color: white;

  & span:first-of-type {
    font-size: 7vw;
    margin-bottom: 0.5vh;
  }
  & span:last-of-type {
    font-size: 7vw;
    margin-top: 0.5vh;
  }

  &::after {
    content: '';
    height: 1px;
    width: 80%;
    margin: 1rem auto;
    display: block;
    background: white;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.25rem;
  font-weight: 300;
  text-align: center;
`;

export const StyledButton = styled.button`
  border: 1px solid white;
  text-transform: uppercase;
  font-style: italic;
  color: white;
  font-weight: 100;
  letter-spacing: 0.25rem;
  background: #3b5999;
  padding: 1.5rem 4.5vw;
  font-size: 2.25rem;
  cursor: pointer;
  transition: all 0.3s;
  scale: 1;
`;
