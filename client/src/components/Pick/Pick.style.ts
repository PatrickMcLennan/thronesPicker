import styled, { css, keyframes } from 'styled-components';

export const StyledDiv = styled.div`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')};
  position: relative;
`;

export const StyledH6 = styled.h6`
  font-size: 2.25rem;
  margin: 1rem;
  font-weight: 100;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledUl = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 200px;
`;
