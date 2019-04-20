import * as React from 'react';

import Badge from '../Badge/Badge';
import { IUser } from '../../../../server/src/utils/serverDictionary';

interface IProps {
  user: IUser;
  changeComponent: Function;
}

interface IState {
  triggerAnimation: boolean;
}

class UserPicks extends React.Component<IProps, IState> {
  state = {
    triggerAnimation: false
  };

  componentDidMount(): void {
    return this.setState(
      (prevState: IState): IState => ({ ...prevState, triggerAnimation: true })
    );
  }

  componentWillUnmount() {
    this.setState(
      (prevState: IState): IState => ({ ...prevState, triggerAnimation: false })
    );
    return setTimeout((): null => null, 750);
  }

  render(): JSX.Element {
    const {
      name,
      house,
      currentScore,
      profilePic,
      changeComponent
    }: IProps = this.props;
    return (
      <section data-testid="userPicks">
        <Badge
          name={name}
          src={profilePic}
          currentScore={currentScore}
          house={house}
          changeComponent={changeComponent}
        />
      </section>
    );
  }
}
