import * as React from 'react';

import { StyledSection } from './OtherUsers.style';
import Badge from '../Badge/Badge';

import { IUser } from '../../utils/clientDictionary';

interface IProps {
  otherUsers: IUser[];
  changeComponent: Function;
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
              handler={() => console.log('wait a minute')}
              currentScore={user.currentScore}
              changeComponent={changeComponent}
            />
          )
        )}
      </StyledSection>
    );
  }
}

export default OtherUsers;
