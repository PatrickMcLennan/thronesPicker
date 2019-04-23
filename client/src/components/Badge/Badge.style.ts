import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

export const StyledFigure = styled.figure`
  display: none;
  border: 1px solid white;
  cursor: pointer;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.75);

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) =>
        flexin('space-evenly', 'center', 'row', 'no-wrap')}
      min-width: 210px;
      height: 80px;
    `};

  & img {
    margin: 0 0.5rem;
  }
`;

export const StyledFigCaption = styled.figcaption`
  ${({ theme: { flexin } }: any) => flexin('space-evenly', 'center', 'column')}
`;

export const StyledP = styled.p`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 0.35rem;

  &[data-testid='badge__house'] {
    font-size: 1.6rem;
    font-style: italic;
    letter-spacing: 0.25rem;
    margin: 0.15rem 0;
  }

  &[data-testid='badge__score'] {
    font-size: 1.75rem;
    letter-spacing: 0.25rem;
  }
`;
