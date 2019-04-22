import styled from 'styled-components';

export const StyledH3 = styled.h3`
  ${({ theme: { flexin } }: any) => flexin()}
  font-size: 3.5rem;
  font-weight: 100;
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  &::after {
    content: '';
    height: 1px;
    width: 60%;
    margin: 0.5rem auto;
    display: block;
    background: white;
  }
`;

export const StyledSpan = styled.span`
  font-size: 5.5rem;
`;
