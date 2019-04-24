import styled, { css, keyframes } from 'styled-components';

interface IProps {
  animate: boolean;
}

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const animateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const StyledSection = styled.section`
  opacity: 0;
  transform: translateY(-100%);

  ${(props: IProps) =>
    props.animate &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
      animation: ${animateIn} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}

  ${(props: IProps) =>
    !props.animate &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
      animation: ${animateOut} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}
`;

// export const ThroneDiv = styled.div``;
