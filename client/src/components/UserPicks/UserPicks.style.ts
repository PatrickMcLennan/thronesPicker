import styled, { css, keyframes } from 'styled-components';

interface IProps {
  animate: boolean;
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
    props.animate &&
    css`
      animation: ${animateIn} 0.5s forwards;
    `}

  ${(props: IProps) =>
    !props.animate &&
    css`
      animation: ${animateIn} 0.5s backwards;
    `}
`;
