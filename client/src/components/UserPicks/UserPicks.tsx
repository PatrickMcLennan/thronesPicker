import * as React from 'react';

import Badge from '../Badge/Badge';
import { emptyUser } from '../../utils/emptyUser';
import { IUser } from '../../../../server/src/utils/serverDictionary';

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

  renderOtherUsers: Function = (): Function => {
    const { changeCurrentUser, changeComponent } = this.props;
    changeCurrentUser({ ...emptyUser });
    return changeComponent('showOtherUsers');
  };

  render(): JSX.Element {
    const {
      currentUser,
      changeComponent,
      changeCurrentUser
    }: IProps = this.props;
    const { profilePic, name, house, currentScore } = currentUser;
    return (
      <section data-testid="userPicks">
        <Badge
          src={profilePic}
          name={name}
          house={house}
          user={currentUser}
          currentScore={currentScore}
          changeComponent={changeComponent}
          changeCurrentUser={changeCurrentUser}
          handler={(): Function => this.renderOtherUsers()}
        />
      </section>
    );
  }
}

export default UserPicks;
