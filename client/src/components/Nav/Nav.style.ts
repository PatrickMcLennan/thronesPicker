import styled, { css, keyframes } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
  delay: number;
}

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%) rotateY(90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateY(0);
  }
`;

const animateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) rotateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100%) rotateY(90deg);
  }
`;

export const StyledNav = styled.nav`
  display: none;
  position: fixed;
  top: 2.5vh;
  left: 77.5%;
  right: 2.5%;
  z-index: 100;
  cursor: pointer;
  opacity: 0;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) =>
        flexin(`flex-end`, `center`, `row`, `no-wrap`)};
      opacity: 1;
      transition: all 0.35s;
    `}
`;

export const StyledH4 = styled.h4`
  font-size: 2.1rem;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 0.1rem;
`;

export const StyledH4Box = styled.div`
  text-align: right;
  width: 100%;
  margin-right: 1rem;

  & h4:last-of-type {
    font-weight: 300;
    font-size: 1.85rem;
    font-style: italic;
    opacity: 0.89;
  }
`;

export const StyledUl = styled.ul`
  position: absolute;
  bottom: 0;
  top: 100%;
  right: 0;
  text-align: right;
  ${({ theme: { flexin } }: any) =>
    flexin('flex-start', 'flex-end', 'column', 'no-wrap')};
`;

export const StyledLi = styled.li`
  margin: 0.5rem;
  transform-origin: right;
  display: none;
  font-size: 2.5rem;
  opacity: 0;
  transform: translateY(100%) rotateY(90deg);

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      display: block;
      animation: ${animateIn} 0.35s forwards;
      animation-delay: ${(props: IProps) => `${props.delay}s`};
    `}
  ${(props: IProps) =>
    !props.triggerAnimation &&
    css`
      display: block;
      animation: ${animateOut} 0.35s backwards;
      animation-delay: ${(props: IProps) => `${props.delay}s`};
    `}
`;
