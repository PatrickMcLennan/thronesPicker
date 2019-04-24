import * as React from 'react';

import Badge from '../Badge/Badge';
import SectionHeader from '../SectionHeader/SectionHeader';
import Pick from '../Pick/Pick';
import { IUser, ICharacter } from '../../utils/clientDictionary';

import {
  StyledSection,
  ThroneDiv,
  WardenDiv,
  Column,
  StyledButton,
  LordDiv,
  DeadDiv,
  UnpickedDiv,
} from './UserPicks.style';
import { emptyCharacter } from '../../utils/characters';
import { theme } from '../../utils/globalStyles';

interface IProps {
  animate: boolean;
  currentUser: IUser;
  changeComponent: Function;
  personalPicks: boolean;
  postMakePicks: Function;
}

class UserPicks extends React.Component<IProps, IUser> {
  state = {
    ...this.props.currentUser
  };

  componentDidMount() {
    console.log(this.state.picks);
  }

  handleCharacterChange: Function = (
    pickName: string,
    newCharacter: ICharacter
  ): void => {
    const { picks } = this.state;
    const allCurrentPicks: ICharacter[] = Object.values(picks);
    const allCurrentKeys: string[] = Object.keys(picks);

    const currentCharacter: ICharacter =
      allCurrentPicks[allCurrentKeys.indexOf(pickName)];

    const newCharPreviousPlacement: number = allCurrentPicks.indexOf(
      newCharacter
    );
    const newCharPreviousKey: string = allCurrentKeys[newCharPreviousPlacement];

    if (newCharPreviousKey === 'unpicked' || newCharPreviousKey === 'dead') {
      this.setState(
        (prevState: IUser): IUser => ({
          ...prevState,
          picks: {
            ...this.state.picks,
            [pickName]: newCharacter,
            [newCharPreviousKey]: this.state.picks[newCharPreviousKey].filter(
              (character: ICharacter): boolean =>
                character.name !== newCharacter.name
            )
          }
        })
      );
    } else if (
      newCharPreviousKey !== 'unpicked' &&
      newCharPreviousKey !== 'dead'
    ) {
      this.setState(
        (prevState: IUser): any => ({
          ...prevState,
          picks: {
            ...this.state.picks,
            [pickName]: newCharacter,
            [newCharPreviousKey]: emptyCharacter
          }
        })
      );
    }

    if (currentCharacter.name !== '...') {
      const copy: ICharacter[] = this.state.picks.unpicked;
      copy.push(currentCharacter);
      return this.setState(
        (prevState: IUser): IUser => ({
          ...prevState,
          picks: {
            ...this.state.picks,
            unpicked: { ...copy }
          }
        })
      );
    } else {
      return;
    }
  };

  submitPicks: Function = async (): Promise<Function> => {
    const { picks } = this.state;
    const { postMakePicks } = this.props;
    return postMakePicks(picks);
  };

  render(): JSX.Element {
    const {
      picks,
      profilePic,
      name,
      house,
      currentScore,
      sigilUrl
    } = this.state;
    const { animate, personalPicks }: IProps = this.props;
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
            handleCharacterChange={this.handleCharacterChange}
            key={Math.random()}
          />
          <Pick
            jobHeader={'Hand of the King'}
            pickName="handOfTheKing"
            pick={picks.handOfTheKing}
            personalPicks={personalPicks}
            handleCharacterChange={this.handleCharacterChange}
            key={Math.random()}
          />
        </ThroneDiv>
        <WardenDiv>
          <Pick
            jobHeader={'Warden of the North'}
            pickName="wardenNorth"
            pick={picks.wardenNorth}
            personalPicks={personalPicks}
            handleCharacterChange={this.handleCharacterChange}
            key={Math.random()}
          />
          <Pick
            jobHeader={'Warden of the South'}
            pickName="wardenSouth"
            pick={picks.wardenSouth}
            personalPicks={personalPicks}
            handleCharacterChange={this.handleCharacterChange}
            key={Math.random()}
          />
          <Pick
            jobHeader={'Warden of the West'}
            pickName="wardenWest"
            pick={picks.wardenWest}
            personalPicks={personalPicks}
            handleCharacterChange={this.handleCharacterChange}
            key={Math.random()}
          />
          <Pick
            jobHeader={'Warden of the East'}
            pickName="wardenEast"
            pick={picks.wardenEast}
            personalPicks={personalPicks}
            handleCharacterChange={this.handleCharacterChange}
            key={Math.random()}
          />
        </WardenDiv>
        <LordDiv>
          <Column>
            <Pick
              jobHeader={'Lord Of Winterfell'}
              pickName="winterfellLord"
              pick={picks.winterfellLord}
              personalPicks={personalPicks}
              handleCharacterChange={this.handleCharacterChange}
              key={Math.random()}
            />
            <Pick
              jobHeader={'Lord Of Dorne'}
              pickName="dorneLord"
              pick={picks.dorneLord}
              personalPicks={personalPicks}
              handleCharacterChange={this.handleCharacterChange}
              key={Math.random()}
            />
            <Pick
              jobHeader={'Lord Of The Reach'}
              pickName="reachLord"
              pick={picks.reachLord}
              personalPicks={personalPicks}
              handleCharacterChange={this.handleCharacterChange}
              key={Math.random()}
            />
          </Column>
          <Column>
            <Pick
              jobHeader={'Lord Of Casterly Rock'}
              pickName="casterlyRockLord"
              pick={picks.casterlyRockLord}
              personalPicks={personalPicks}
              handleCharacterChange={this.handleCharacterChange}
              key={Math.random()}
            />
            <Pick
              jobHeader={'Lord Of Riverrun'}
              pickName="riverrunLord"
              pick={picks.riverrunLord}
              personalPicks={personalPicks}
              handleCharacterChange={this.handleCharacterChange}
              key={Math.random()}
            />
            <Pick
              jobHeader={'Lord Of The Iron Islands'}
              pickName="ironIslandsLord"
              pick={picks.ironIslandsLord}
              personalPicks={personalPicks}
              handleCharacterChange={this.handleCharacterChange}
              key={Math.random()}
            />
          </Column>
        </LordDiv>
        {personalPicks && (
          <StyledButton onClick={this.submitPicks}>Submit Picks</StyledButton>
        )}

        <DeadDiv>
          <h6>hello</h6>
        </DeadDiv>
        <UnpickedDiv>
          {picks.unpicked.map((character: ICharacter): JSX.Element => <Badge src={character.imgLink} name={character.name} house={character.house} home={character.home} sigilUrl={character.sigilUrl} thumbnailSize='big' />)}
        </UnpickedDiv>
      </StyledSection>
    );
  }
}

export default UserPicks;
