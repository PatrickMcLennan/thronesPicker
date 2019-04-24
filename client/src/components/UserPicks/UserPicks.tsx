import * as React from 'react';

import Badge from '../Badge/Badge';
import SectionHeader from '../SectionHeader/SectionHeader';
import Pick from '../Pick/Pick';
import { IUser, ICharacter } from '../../utils/clientDictionary';

import { StyledSection, ThroneDiv, StyledButton } from './UserPicks.style';
import { emptyCharacter } from '../../utils/characters';

interface IProps {
  animate: boolean;
  currentUser: IUser;
  changeCurrentUser: Function;
  changeComponent: Function;
  personalPicks: boolean;
  postMakePicks: Function;
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
    const currentPicks: ICharacter[] = Object.values(this.state.picks);
    const currentKeys: string[] = Object.keys(this.state.picks);
    const previousPlacement: number = currentPicks.indexOf(newCharacter);
    const previousKey: string = currentKeys[previousPlacement];

    if (previousKey !== 'unpicked') {
      return this.setState(
        (prevState: IUser): any => ({
          ...prevState,
          picks: {
            ...this.state.picks,
            [pick]: newCharacter,
            [previousKey]: emptyCharacter
          }
        })
      );
    } else {
      return this.setState(
        (prevState: IUser): IUser => ({ ...prevState, [pick]: newCharacter })
      );
    }
  };

  submitPicks: Function = async (): Promise<Function> => {
    const { picks } = this.state;
    const { postMakePicks } = this.props;
    return postMakePicks(picks);
  };

  render(): JSX.Element {
    const { picks } = this.state;
    const { currentUser, animate, personalPicks }: IProps = this.props;
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
            key={Math.random()}
          />
          <Pick
            jobHeader={'Hand of the King'}
            pickName="handOfTheKing"
            pick={picks.handOfTheKing}
            personalPicks={personalPicks}
            userPicks={picks}
            showDropdown={true}
            handleCharacterChange={this.handleCharacterChange}
            key={Math.random()}
          />
        </ThroneDiv>
        {personalPicks && (
          <StyledButton onClick={this.submitPicks}>Submit Picks</StyledButton>
        )}
      </StyledSection>
    );
  }
}

export default UserPicks;
