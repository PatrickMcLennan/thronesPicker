import * as React from 'react';

import Badge from '../Badge/Badge';

import { StyledH6 } from './Pick.style';

import { ICharacter, IUser, IPicks } from '../../utils/clientDictionary';

interface IProps {
  jobProperty: string;
  personalPicks: boolean;
  picked: boolean;
  pick?: ICharacter;
}

class Pick extends React.Component<IProps, {}> {
  render(): JSX.Element {
    const { jobProperty, pick } = this.props;
    return (
      <div data-testid="pick">
        <StyledH6>{jobProperty}</StyledH6>
        <Badge
          src={pick ? pick.imgLink : 'Unknown Sigil Url'}
          name={pick ? pick.name : '...'}
          house={pick ? pick.house : '...'}
          home={pick ? pick.home : '...'}
          sigilUrl={pick ? pick.sigilUrl : 'unknown sgil url'}
          thumbnailSize="big"
        />
      </div>
    );
  }
}

export default Pick;
