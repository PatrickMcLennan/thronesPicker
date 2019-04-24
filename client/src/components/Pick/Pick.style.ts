import styled, { css, keyframes } from 'styled-components';

export const StyledDiv = styled.div`
  ${({ theme: { flexin } }: any) => flexin('center', 'center', 'column')}
`;

export const StyledH6 = styled.h6`
  font-size: 2.25rem;
  font-weight: 100;
  letter-spacing: 0.3rem;
`;
