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
  StyledH6
} from './UserPicks.style';
import { emptyCharacter } from '../../utils/characters';

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

  removeFromUnpicked: Function = (
    newCharacter: ICharacter,
    unpickedArray: ICharacter[]
  ): ICharacter[] => {
    if (newCharacter.name === '...') {
      return unpickedArray;
    } else {
      return unpickedArray.filter(
        (character: ICharacter): boolean => character.name !== newCharacter.name
      );
    }
  };

  addToUnpicked: Function = (
    oldCharacter: ICharacter,
    unpickedArray: ICharacter[]
  ): ICharacter[] => {
    if (oldCharacter.name === '...') {
      return unpickedArray;
    } else {
      return unpickedArray.concat(oldCharacter);
    }
  };

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

    const addOldCharacter: ICharacter[] = this.addToUnpicked(
      currentCharacter,
      picks.unpicked
    );
    const removeNewCharacter: ICharacter[] = this.removeFromUnpicked(
      newCharacter,
      addOldCharacter
    );

    return this.setState(
      (prevState: IUser): IUser => ({
        ...prevState,
        picks: {
          ...this.state.picks,
          [pickName]: newCharacter,
          [newCharPreviousKey]: emptyCharacter,
          unpicked: removeNewCharacter
        }
      })
    );
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
          key={Math.random()}
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
          <Column>
            <Pick
              jobHeader={'Warden of the West'}
              pickName="wardenWest"
              pick={picks.wardenWest}
              personalPicks={personalPicks}
              handleCharacterChange={this.handleCharacterChange}
              key={Math.random()}
            />
          </Column>
          <Column>
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
          </Column>
          <Column>
            <Pick
              jobHeader={'Warden of the East'}
              pickName="wardenEast"
              pick={picks.wardenEast}
              personalPicks={personalPicks}
              handleCharacterChange={this.handleCharacterChange}
              key={Math.random()}
            />
          </Column>
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
          <StyledH6>Dead</StyledH6>
          {picks.dead.map(
            (character: ICharacter): JSX.Element => (
              <Badge
                src={character.imgLink}
                name={character.name}
                house={character.house}
                home={character.home}
                sigilUrl={character.sigilUrl}
                thumbnailSize="big"
                key={Math.random()}
              />
            )
          )}
        </DeadDiv>
        <UnpickedDiv>
          <StyledH6>Unpicked</StyledH6>
          {picks.unpicked.map(
            (character: ICharacter): JSX.Element => (
              <Badge
                src={character.imgLink}
                name={character.name}
                house={character.house}
                home={character.home}
                sigilUrl={character.sigilUrl}
                thumbnailSize="big"
                key={Math.random()}
              />
            )
          )}
        </UnpickedDiv>
      </StyledSection>
    );
  }
}

export default UserPicks;
