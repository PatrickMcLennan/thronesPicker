import styled, { css, keyframes } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100vw)
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
    transform: translateX(100vw)
  }
`;

export const StyledSection = styled.section`
  display: none;

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) =>
        flexin('space-evenly', 'center', 'column')};
      animation: ${animateIn} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}
  ${(props: IProps) =>
    !props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) =>
        flexin('space-evenly', 'center', 'column')}
      animation: ${animateOut} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}
`;

export const StyledForm = styled.form`
  ${({ theme: { flexin } }: any) =>
    flexin('center', 'center', 'column', 'wrap')}
  padding: 5rem;

  & > * {
    margin: 2rem;
  }
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
  margin: 1rem 0;
`;

export const StyledInput = styled.input`
  ${({ theme: { inputs } }: any) => inputs.inputsMain}

  &[type="submit"] {
    ${({ theme: { inputs } }: any) => inputs.submit}
  }
`;

export const StyledUl = styled.ul`
  ${({ theme: { flexin } }: any) => flexin()}
  position:absolute;
  overflow-y: scroll;
  height: 250px;
  transform-origin: top;
  top: 100%;
  left: 0;
  right: 0;
`;
