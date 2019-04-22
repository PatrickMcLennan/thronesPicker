import styled, { css, keyframes } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const StyledSection = styled.section`
  display: none;
  border: 1px solid white;
  animation-duration: 0.75s;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) =>
        flexin('space-evenly', 'center', 'column')}
      animation: ${animateIn} forwards;
    `}
  ${(props: IProps) =>
    !props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
      animation: ${animateIn} backwards;
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
`;

export const StyledH2 = styled.h2`
  font-size: 2.25rem;
  text-align: center;
`;

export const StyledButton = styled.button`
  border: 1px solid white;
  background: #3b5999;
`;
