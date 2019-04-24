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
const animateOut = keyframes`
  0% {
    transform: translateY(0);
  opacity: 1;
  }
  100% {
    transform: translateY(100%);
  opacity: 0;
  }
`;

export const StyledSection = styled.section`
  opacity: 0;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')};
      animation: ${animateIn} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}

  ${(props: IProps) =>
    !props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')};
      animation: ${animateOut} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}
`;
