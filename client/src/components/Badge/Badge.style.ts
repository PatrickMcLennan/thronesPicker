import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

export const StyledFigure = styled.figure`
  display: none;
  border: 1px solid white;
  cursor: pointer;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) => flexin('space-evenly')}
    min-width: 200px;
    height: 80px;
    background: orange;
    `}
`;


export const StyledFigCaption = styled.figcaption`
  ${({theme: {flexin}}: any) => flexin('space-evenly', 'flex-end', 'column')}
`