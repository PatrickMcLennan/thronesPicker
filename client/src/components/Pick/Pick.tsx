import * as React from 'react';

import Badge from '../Badge/Badge';

import { StyledH6 } from './Pick.style';

import { ICharacter } from '../../utils/clientDictionary';

interface IProps {
  jobProperty: string;
  personalPicks: boolean;
  pick?: ICharacter;
}

class Pick extends React.Component<IProps, {}> {
  render(): JSX.Element {
    const { jobProperty, pick } = this.props;
    return (
      <div data-testid="pick">
        <StyledH6>{jobProperty}</StyledH6>
        <Badge
          src={'Unknown Sigil Url'}
          name={'...'}
          house={'...'}
          home={'...'}
          sigilUrl={'unknown sgil url'}
          thumbnailSize="big"
        />
      </div>
    );
  }
}

export default Pick;
