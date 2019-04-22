import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
  delay: number;
}

export const StyledNav = styled.nav`
  display: none;
  position: fixed;
  top: 2.5vh;
  left: 77.5%;
  right: 2.5%;
  z-index: 100;
  cursor: pointer;
  border: 1px solid red;
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
  display: block;
  font-size: 2.5rem;
`;

export const StyledH4 = styled.h4`
  font-size: 2.1rem;
  text-transform: uppercase;
  font-weight: 100;
`;
