import * as React from 'react';

import Badge from '../Badge/Badge';

import { StyledH6 } from './Pick.style';

import { IPicks, ICharacter } from '../../utils/clientDictionary';

interface IProps {
  jobHeader: string;
  pickName: string;
  pick: ICharacter;
  personalPicks: boolean;
  userPicks: IPicks;
  showDropdown: boolean;
}

interface IState {
  canEdit: boolean;
  toggleDropdown: boolean;
}

class Pick extends React.Component<IProps, {}> {
  state = {
    toggleDropdown: false
  };

  toggleMenu: Function = (): void => {
    this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        toggleDropdown: !this.state.toggleDropdown
      })
    );
  };

  render(): JSX.Element {
    const { jobHeader, personalPicks, pick } = this.props;
    return (
      <div data-testid="pick">
        <StyledH6>{jobHeader}</StyledH6>
        <Badge
          src={pick.imgLink}
          name={pick.name}
          house={pick.house}
          home={pick.home}
          sigilUrl={pick.sigilUrl}
          thumbnailSize="big"
          handler={personalPicks ? this.toggleMenu : (): any => null}
        />
      </div>
    );
  }
}

export default Pick;
