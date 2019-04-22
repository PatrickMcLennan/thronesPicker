import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

export const StyledSection = styled.section`
  display: none;
  border: 1px solid white;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      display: block;
    `}
`;
