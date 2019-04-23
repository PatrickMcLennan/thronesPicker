import * as React from 'react';

import { StyledSection } from './OtherUsers.style';
import SectionHeader from '../SectionHeader/SectionHeader';
import Badge from '../Badge/Badge';

import { IUser } from '../../utils/clientDictionary';

interface IProps {
  animate: boolean;
  otherUsers: IUser[];
  changeCurrentUser: Function;
  changeComponent: Function;
}

class OtherUsers extends React.Component<IProps, {}> {
  renderUserPicks: Function = (
    newCurrentUser: IUser,
    newComponent: string
  ): Function => {
    const { changeCurrentUser, changeComponent } = this.props;
    changeCurrentUser(newCurrentUser);
    return changeComponent(newComponent);
  };

  render(): JSX.Element {
    const { otherUsers, animate } = this.props;
    return (
      <StyledSection data-testid="otherUsers" triggerAnimation={animate}>
        <SectionHeader
          firstLetter="O"
          word="ther Pick"
          lastLetter="s"
          size={3.5}
        />
        {otherUsers.map(
          (user: IUser): JSX.Element => (
            <Badge
              data-testid="otherUsers__badge"
              src={user.profilePic}
              name={user.name}
              house={user.house.name}
              sigilUrl={user.sigilUrl}
              handler={() => this.renderUserPicks(user, 'showUserPicks')}
              currentScore={user.currentScore}
              thumbnailSize={'small'}
              key={Math.random()}
            />
          )
        )}
      </StyledSection>
    );
  }
}

export default OtherUsers;
