import styled, { css } from 'styled-components';

interface IProps {
  triggerAnimation: boolean;
}

export const StyledSection = styled.section`
  display: none;
  background: orangered;
  transition: all 0.75s;
  transform: translateY(-100%);

  ${(props: IProps) =>
    props.triggerAnimation &&
    css`
      ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
      transform: translateY(0);
    `}
`;

export const StyledH1 = styled.h1`
  font-size: 3.25rem;
  text-align: center;
`;

export const StyledH2 = styled.h2`
  font-size: 2.25rem;
  text-align: center;
`;

export const StyledButton = styled.button`
  border: 1px solid white;
  background: #3b5999;
`;
