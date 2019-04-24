import * as React from 'react';

import Badge from '../Badge/Badge';

import { StyledDiv, StyledH6 } from './Pick.style';

import { IPicks, ICharacter } from '../../utils/clientDictionary';
import { allCharacters } from '../../utils/characters';

interface IProps {
  jobHeader: string;
  pickName: string;
  pick: ICharacter;
  personalPicks: boolean;
  userPicks: IPicks;
  showDropdown: boolean;
}

interface IState {
  toggleDropdown: boolean;
  availableCharacters: ICharacter[];
}

class Pick extends React.Component<IProps, {}> {
  state = {
    toggleDropdown: false,
    availableCharacters: allCharacters.filter(
      (character: ICharacter): boolean =>
        character.name !== this.props.pick.name
    )
  };

  renderCharacterList: Function = (): void => {
    return this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        toggleDropdown: !this.state.toggleDropdown
      })
    );
  };

  placeholder = (name: string) => console.log(name);

  render(): JSX.Element {
    const { jobHeader, personalPicks, pick } = this.props;
    const { toggleDropdown, availableCharacters } = this.state;
    return (
      <StyledDiv data-testid="pick">
        <StyledH6>{jobHeader}</StyledH6>
        <Badge
          src={pick.imgLink}
          name={pick.name}
          house={pick.house}
          home={pick.home}
          sigilUrl={pick.sigilUrl}
          thumbnailSize="big"
          handler={
            personalPicks
              ? () => this.renderCharacterList(pick.name)
              : (): any => null
          }
        />
        {toggleDropdown && (
          <ul>
            {availableCharacters.map(
              (character: ICharacter): JSX.Element => (
                <li>
                  <Badge
                    src={character.imgLink}
                    name={character.name}
                    house={character.house}
                    home={character.home}
                    sigilUrl={character.sigilUrl}
                    thumbnailSize="big"
                    handler={() => this.placeholder}
                  />
                </li>
              )
            )}
          </ul>
        )}
      </StyledDiv>
    );
  }
}

export default Pick;
