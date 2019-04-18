import * as React from 'react';
import { IBadge } from './../../utils/clientDictionary';

const Badge: Function = ({ src, alt, handler }: IBadge): JSX.Element => (
  <img data-testid="badge" src={src} alt={alt} onClick={() => handler} />
);

export default Badge;
