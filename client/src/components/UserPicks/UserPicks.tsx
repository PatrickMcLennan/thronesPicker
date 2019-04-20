import * as React from 'react';

import Badge from '../Badge/Badge';
import { emptyUser } from '../../utils/emptyUser';
import { IUser } from '../../utils/clientDictionary';

interface IProps {
  currentUser: IUser;
  changeCurrentUser: Function;
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

  renderOtherUsers: Function = (newComponent: string): Function => {
    const { changeCurrentUser, changeComponent } = this.props;
    changeCurrentUser({ ...emptyUser });
    return changeComponent(newComponent);
  };

  render(): JSX.Element {
    const { currentUser }: IProps = this.props;
    const { profilePic, name, house, currentScore, sigilUrl } = currentUser;
    return (
      <section data-testid="userPicks">
        <Badge
          src={profilePic}
          name={name}
          house={house}
          sigilUrl={sigilUrl}
          currentScore={currentScore}
          handler={(): Function => this.renderOtherUsers('showOtherUsers')}
        />
      </section>
    );
  }
}

export default UserPicks;
