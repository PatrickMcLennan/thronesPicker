import * as React from 'react';

import { StyledSection } from './OtherUsers.style';
import Badge from '../Badge/Badge';

import { IUser, IPicks } from '../../utils/clientDictionary';

interface IProps {
  otherUsers: IUser[];
  changeComponent: Function;
  changeCurrentUser: Function;
}

interface IState {
  triggerAnimation: boolean;
}

class OtherUsers extends React.Component<IProps, IState> {
  state = {
    triggerAnimation: false
  };

  componentWillMount(): void {
    return this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        triggerAnimation: true
      })
    );
  }

  componentWillUnmount() {
    this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        triggerAnimation: false
      })
    );
    return setTimeout((): void => null, 750);
  }

  renderUserPicks: Function = (
    newCurrentUser: IUser,
    newComponent: string
  ): Function => {
    const { changeCurrentUser, changeComponent } = this.props;
    changeCurrentUser(newCurrentUser);
    return changeComponent(newComponent);
  };

  render(): JSX.Element {
    const { otherUsers, changeComponent } = this.props;
    const { triggerAnimation } = this.state;
    return (
      <StyledSection
        data-testid="otherUsers"
        triggerAnimation={triggerAnimation}>
        {otherUsers.map(
          (user: IUser): JSX.Element => (
            <Badge
              src={user.profilePic}
              name={user.name}
              house={user.house}
              user={user}
              handler={() => this.renderUserPicks(user, 'showUserPicks')}
              currentScore={user.currentScore}
              changeComponent={changeComponent}
              key={Math.random()}
            />
          )
        )}
      </StyledSection>
    );
  }
}

export default OtherUsers;
