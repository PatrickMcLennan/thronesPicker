import styled, { css, keyframes } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%)
  }
  100% {
    opacity: 1;
    transform: translateX(0%)
  }
`;
const animateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%)
  }
  100% {
    opacity: 0;
    transform: translateX(100%)
  }
`;

export const StyledSection = styled.section`
  display: none;
  border: 1px solid white;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')};
      animation: ${animateIn} 0.75s forwards;
    `}
  ${(props: IProps) =>
    !props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
      animation: ${animateOut} .75s forwards;
    `}
`;

export const StyledForm = styled.form`
  background: purple;
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
