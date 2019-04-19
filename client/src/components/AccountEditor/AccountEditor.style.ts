import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

export const StyledSection = styled.section`
  display: none;
  background: red;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      display: block;
    `}
`;

export const StyledForm = styled.form`
  display: none;
  background: purple;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      display: block;
    `}
`;
