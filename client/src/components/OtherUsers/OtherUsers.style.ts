import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

export const StyledSection = styled.section`
  display: none;
  background: yellow;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      display: block;
    `}
`;
