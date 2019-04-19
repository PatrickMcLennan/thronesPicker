import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

export const StyledFigure = styled.figure`
  display: none;
  background: green;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) => flexin()}
    `}
`;
