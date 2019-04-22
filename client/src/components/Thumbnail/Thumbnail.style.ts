import styled, { css } from 'styled-components';

interface IProps {
  size: string;
}

export const StyledImg = styled.img`
  border-radius: 100%;
  border: 1px solid white;

  ${(props: IProps) =>
    props.size === 'small' &&
    css`
      height: 4rem;
      width: 4rem;
    `}

  ${(props: IProps) =>
    props.size === 'big' &&
    css`
      height: 6rem;
      width: 6rem;
    `}
`;
