import * as React from 'react';

import Badge from '../Badge/Badge';
import SectionHeader from '../SectionHeader/SectionHeader';
import Pick from '../Pick/Pick';
import { IUser, ICharacter } from '../../utils/clientDictionary';

import { StyledSection, ThroneDiv } from './UserPicks.style';

interface IProps {
  animate: boolean;
  currentUser: IUser;
  changeCurrentUser: Function;
  changeComponent: Function;
  personalPicks: boolean;
}

class UserPicks extends React.Component<IProps, IUser> {
  state = {
    ...this.props.currentUser
  };

  componentDidMount() {
    console.log(this.props.currentUser.picks);
  }

  handleCharacterChange: Function = (
    pick: string,
    newCharacter: ICharacter
  ): void => {
    return this.setState(
      (prevState: IUser): any => ({
        ...prevState,
        picks: { [pick]: newCharacter }
      })
    );
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
          thumbnailSize={'big'}
        />
        <ThroneDiv>
          <Pick
            jobHeader={'Iron Throne'}
            pickName="ironThrone"
            pick={picks.ironThrone}
            personalPicks={personalPicks}
            userPicks={picks}
            showDropdown={true}
            handleCharacterChange={this.handleCharacterChange}
          />
        </ThroneDiv>
      </StyledSection>
    );
  }
}

export default UserPicks;
