import styled, { css, keyframes } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

const animateIn = keyframes`
  0% {
    transform: translateY(100%);
  opacity: 0;
  }
  100% {
    transform: translateY(0);
  opacity: 1;
  }
`;

export const StyledSection = styled.section`
  display: none;
  background: yellow;
  transform: translateY(100%);
  opacity: 0;
  animation-duration: all 0.75s;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')};
      animation: ${animateIn} forwards;
    `}

  ${(props: IProps) =>
    !props.triggerAnimation &&
    css`
      animation: ${animateIn} backwards;
    `}
`;
