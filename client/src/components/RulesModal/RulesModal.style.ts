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
  display: none;
  border: 1px solid white;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      display: block;
      animation: ${animateIn} 0.75s forwards;
    `}

  ${(props: IProps) =>
    !props.triggerAnimation &&
    css`
      display: block;
      animation: ${animateOut} 0.75s forwards;
    `}
`;
