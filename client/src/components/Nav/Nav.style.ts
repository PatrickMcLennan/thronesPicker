import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

export const StyledUl = styled.ul`
  display: none;

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

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      opacity: 1;
      transform: translateY(0) rotateY(0);
    `}
`;
