import styled, { css, keyframes } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
  success: boolean;
}

const animateIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const animateOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledDiv = styled.div`
  position: fixed;
  opacity: 0;
  bottom: 20vh;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 1rem 3rem;

  backface-visibility: visible;
  animation: ${animateIn} 0.25s backwards;
  border-top: 3px solid ${({ theme: { colors } }: any) => colors.error};
  border-bottom: 3px solid ${({ theme: { colors } }: any) => colors.error};

  ${(props: IProps) =>
    props.success &&
    css`
      border-top: 3px solid ${({ theme: { colors } }: any) => colors.success};
      border-bottom: 3px solid ${({ theme: { colors } }: any) => colors.success};
    `}

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      backface-visibility: visible;
      animation: ${animateIn} 0.35s forwards;
    `}
    ${(props: IProps) =>
      !props.triggerAnimation &&
      css`
        backface-visibility: visible;
        animation: ${animateOut} 0.35s forwards;
      `}
`;

export const StyledH5 = styled.h5`
  font-size: 1.75rem;
  color: white;
  letter-spacing: 0.25rem;
  font-weight: 300;
  text-transform: uppercase;
`;
