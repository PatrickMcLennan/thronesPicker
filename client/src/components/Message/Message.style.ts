import styled, { css, keyframes } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
  success: boolean;
}

const animateIn = keyframes`
  0% {
    opacity: 0;
  transform: translate3d(100%, 100%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  margin: 15vh ;
  opacity: 0;
  bottom: 10vh;
  left: 20%;
  right: 20%;
  border: 5px solid green;
  text-align: center;

  ${(props: IProps) =>
    !props.success &&
    css`
      border-top: 3px solid red;
      border-bottom: 3px solid red;
    `}

  ${(props: IProps) =>
    props.success &&
    css`
      border-top: 3px solid green;
      border-bottom: 3px solid green;
    `}

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      backface-visibility: visible;
      border: 1px solid white;
      transform-style: preserve-3d;
      transform: translate3d(0);
      transition: all 0.5s;
      animation: ${animateIn} 0.5s forwards;
    `}
`;

export const StyledH5 = styled.h5`
  font-size: 1.75rem;
  color: white;
  letter-spacing: 0.25rem;
  font-weight: 300;
  text-transform: uppercase;
`;
