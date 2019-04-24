import styled, { css, keyframes } from 'styled-components';

interface IProps {
  animate: boolean;
}

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const animateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const StyledSection = styled.section`
  opacity: 0;
  transform: translateY(-100%);

  ${(props: IProps) =>
    props.animate &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
      animation: ${animateIn} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}

  ${(props: IProps) =>
    !props.animate &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
      animation: ${animateOut} forwards;
      animation-duration: ${({ theme: { animation } }: any) =>
        animation.timeMain};
    `}
`;

const Container = styled.div`
  margin-top: 2rem;
`;

const Row = styled(Container)`
  ${({ theme: { flexin } }: any) => flexin('space-evenly', 'center', 'row')};
  width: 100%;
`;

export const Column = styled(Container)`
  ${({ theme: { flexin } }: any) => flexin('space-evenly', 'center', 'column')}

  & div {
    &:not(:last-of-type)::after {
      margin: 2rem 0;
      height: 35px;
      width: 1px;
      background-color: white;
      display: block;
      content: '';
    }
  }
`;

export const ThroneDiv = styled(Column)`
  flex-wrap: nowrap;
  & div {
    &:not(:last-of-type)::after {
      margin: 2rem 0;
      height: 35px;
      width: 1px;
      background-color: white;
      display: block;
      content: '';
    }
  }
`;

export const WardenDiv = styled(Row)`
  position: relative;
  &:first-of-type(div) {
    order: 2;
  }
  &:last-of-type(div) {
    order: 3;
  }
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 1px;
    width: 35px;
    background-color: white;
    display: block;
    content: '';
  }
`;

export const LordDiv = styled(Row)``;

export const StyledButton = styled.button`
  ${({ theme: { inputs } }: any) => inputs.submit}
`;
