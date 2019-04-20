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

export const StyledLabel = styled.label`
  ${({ theme: { flexin } }: any) =>
    flexin('space-evenly', 'flex-start', 'column', 'no-wrap')};

  &[data-testid='accountEditor__label--newHouse'] {
    position: relative;
  }
`;

export const StyledP = styled.p`
  font-size: 1.6rem;
  text-transform: uppercase;
  text-align: left;
`;

export const StyledInput = styled.input`
  ${({ theme: { inputs } }: any) => inputs.inputsMain}
`;

export const StyledUl = styled.ul`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
  position:absolute;
  top: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`;
