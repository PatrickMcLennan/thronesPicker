import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
  delay: number;
}

export const StyledNav = styled.nav`
  ${({ theme: { flexin } }: any) =>
    flexin(`flex-end`, `center`, `row`, `no-wrap`)}
  position:fixed;
  top: 2.5vh;
  left: 0;
  right: 0;
`;

export const StyledUl = styled.ul`
  display: none;
  position: absolute;
  bottom: 0;
  top: 100%;
  right: 0;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'flex-end', 'column')}
    `}
`;

export const StyledLi = styled.li`
  opacity: 0;
  transform-origin: right;
  transform: translateY(100%) rotateY(90deg);
  transition: all 0.3s ease-out;
  transition-delay: calc(${(props: IProps) => props.delay} * 0.5);
  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      opacity: 1;
      transform: translateY(0) rotateY(0);
    `};
`;
