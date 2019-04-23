import * as React from 'react';

import Badge from '../Badge/Badge';
import SectionHeader from '../SectionHeader/SectionHeader';
import { emptyUser } from '../../utils/emptyUser';
import { IUser } from '../../utils/clientDictionary';

import { StyledSection } from './UserPicks.style';

interface IProps {
  animate: boolean;
  currentUser: IUser;
  changeCurrentUser: Function;
  changeComponent: Function;
}

class UserPicks extends React.Component<IProps, {}> {
  renderOtherUsers: Function = (newComponent: string): Function => {
    const { changeCurrentUser, changeComponent } = this.props;
    changeCurrentUser({ ...emptyUser });
    return changeComponent(newComponent);
  };

  render(): JSX.Element {
    const { currentUser, animate }: IProps = this.props;
    const { profilePic, name, house, currentScore, sigilUrl } = currentUser;
    return (
      <StyledSection data-testid="userPicks" animate={animate}>
        <SectionHeader
          firstLetter="U"
          word="ser Pick"
          lastLetter="S"
          size={3.5}
        />
        <Badge
          src={profilePic}
          name={name}
          house={house.name}
          sigilUrl={sigilUrl}
          currentScore={currentScore}
          handler={(): Function => this.renderOtherUsers('showOtherUsers')}
          thumbnailSize={'small'}
        />
      </StyledSection>
    );
  }
}

export default UserPicks;
