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

const Row = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const ThroneDiv = styled(Row)`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')};
  margin: 2rem 0;
  padding: 2rem;
  width: 100%;

  & div {
    &::after {
      margin: 2rem 0 0 0;
      height: 35px;
      width: 1px;
      background-color: white;
      display: block;
      content: '';
    }
  }
`;

export const StyledButton = styled.button`
  ${({ theme: { inputs } }: any) => inputs.submit}
`;
