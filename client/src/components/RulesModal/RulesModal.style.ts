import styled, { css, keyframes } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%)
  }
  100% {
    opacity: 1;
    transform: translateX(0%)
  }
`;
const animateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%)
  }
  100% {
    opacity: 0;
    transform: translateX(-100%)
  }
`;

export const StyledSection = styled.section`
  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      display: ${({ theme: { flexin } }: any) =>
        flexin('space-evenly', 'center', 'column')};
      animation: ${animateIn} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}

  ${(props: IProps) =>
    !props.triggerAnimation &&
    css`
      display: ${({ theme: { flexin } }: any) =>
        flexin('space-evenly', 'center', 'column')};
      animation: ${animateOut} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}
`;

export const StyledUl = styled.ul`
  text-align: center;
  width: 80%;
`;

export const StyledLi = styled.li`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.35rem;
  text-transform: uppercase;
  margin: 2rem;

  & b {
    font-size: 2.25rem;
  }
`;

export const StyledH6 = styled.h6`
  font-size: 2rem;
  font-style: italic;
  letter-spacing: 0.3rem;
  font-weight: 100;
  text-transform: uppercase;
`;

export const StyledSpan = styled.h6`
  display: block;
  padding: 1.5rem;
  font-size: 1.75;
  font-style: italic;
  letter-spacing: 0.25rem;
  line-height: 1.4;
  font-weight: 300;
  text-transform: uppercase;
`;
