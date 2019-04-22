import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
  delay: number;
}

export const StyledNav = styled.nav`
  display: none;
  position: fixed;
  top: 2.5vh;
  left: 0;
  right: 0;
  z-index: 100;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) =>
        flexin(`flex-end`, `center`, `row`, `no-wrap`)}
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
