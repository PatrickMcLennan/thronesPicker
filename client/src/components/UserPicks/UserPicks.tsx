import * as React from 'react';

import Badge from '../Badge/Badge';
import SectionHeader from '../SectionHeader/SectionHeader';
import Pick from '../Pick/Pick';
import { emptyUser } from '../../utils/emptyUser';
import { IUser } from '../../utils/clientDictionary';

import { StyledSection, ThroneDiv } from './UserPicks.style';

interface IProps {
  animate: boolean;
  currentUser: IUser;
  changeCurrentUser: Function;
  changeComponent: Function;
  personalPicks: boolean;
}

interface IState {
  currentUser: IUser;
  personalPicks: boolean;
}

class UserPicks extends React.Component<IProps, IState> {
  state = {
    currentUser: this.props.currentUser,
    personalPicks: this.props.personalPicks
  };

  render(): JSX.Element {
    const { currentUser, animate, personalPicks }: IProps = this.props;
    const {
      profilePic,
      name,
      house,
      currentScore,
      sigilUrl,
      picks
    } = currentUser;
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
          handler={(): void => console.log('hello')}
          thumbnailSize={'small'}
        />
        <ThroneDiv>
          <Pick
            jobProperty={'Iron Throne'}
            personalPicks={personalPicks}
            picked={picks.ironThrone.length === 0}
            // pick={picks.ironThrone}
          />
        </ThroneDiv>
      </StyledSection>
    );
  }
}

export default UserPicks;
