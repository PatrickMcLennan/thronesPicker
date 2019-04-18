import * as React from 'react';

interface IProps {
  src: string;
  alt: string;
  handler: Function;
}

const Badge: Function = ({ src, alt, handler }: IProps): JSX.Element => (
  <img src={src} alt={alt} onClick={() => handler} />
);
