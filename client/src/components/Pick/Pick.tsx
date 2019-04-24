import * as React from 'react';

import Badge from '../Badge/Badge';

import { ICharacter, IUser, IPicks } from '../../utils/clientDictionary';

interface IProps {
  job: IPicks;
  changePick: Function;
  character?: ICharacter;
}

class Pick extends React.Component<IProps, {}> {
  render(): JSX.Element {
    const { job } = this.props;
    return (
      <div data-testid="pick">
        <h6>{job}</h6>
      </div>
    );
  }
}

export default Pick;
