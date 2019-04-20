import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
  success: boolean;
}

export const StyledDiv = styled.div`
  display: none;
  background: blue;
  border-top: 1px solid red;
  border-bottom: 1px solid red;

  ${(props: IProps) =>
    props.success &&
    css`
      border-top: 1px solid green;
      border-bottom: 1px solid green;
    `}

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      display: block;
    `}
`;
