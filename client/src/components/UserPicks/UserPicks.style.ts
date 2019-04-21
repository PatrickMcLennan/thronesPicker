import styled, { css, keyframes } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const StyledSection = styled.section`
  display: none;
  opacity: 0;
  transform: translateX(-100%);

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      animation: ${animateIn} forwards;
    `}

  ${(props: IProps) =>
    !props.triggerAnimation &&
    css`
      animation: ${animateIn} backwards;
    `}
`;
