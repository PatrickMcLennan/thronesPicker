import * as React from 'react';
import { IThumbnail } from '../../utils/clientDictionary';

const Thumbnail: Function = ({
  src,
  alt,
  handler
}: IThumbnail): JSX.Element => (
  <img
    data-testid="thumbnail"
    src={src}
    alt={alt}
    onClick={() => handler(alt)}
  />
);

export default Thumbnail;
