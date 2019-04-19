import * as React from 'react';

interface IProps {
  src: string;
  name: string;
  handler: Function;
}

const Thumbnail: Function = ({ src, name, handler }: IProps): JSX.Element => (
  <img
    data-testid="thumbnail"
    src={src}
    alt={name}
    onClick={() => handler(name)}
  />
);

export default Thumbnail;
