import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

export const StyledDiv = styled.div`
  display: none;
  background: blue;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      display: block;
    `}
`;
