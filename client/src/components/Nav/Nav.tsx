import * as React from 'react';

import { StyledUl } from './Nav.style';
import Badge from '../Badge/Badge';
import { IUser } from '../../utils/clientDictionary';

interface IProps {
  name?: string;
  profilePic: string;
  house: string;
  changeComponent: Function;
  randomSuggestion: IUser;
}

interface IState {
  name: string;
  renderMenu: boolean;
}

class Nav extends React.Component<IProps, IState> {
  state = {
    name: this.props.name,
    renderMenu: false
  };

  toggleMenu: Function = (): void => {
    return this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        renderMenu: !this.state.renderMenu
      })
    );
  };

  render(): JSX.Element {
    const { name, profilePic, randomSuggestion }: IProps = this.props;
    const { renderMenu }: IState = this.state;
    return (
      <nav data-testid="nav">
        <Badge src={profilePic} alt={name} handler={() => this.toggleMenu} />
        <h1>name</h1>
        <h1>house</h1>
        {renderMenu && (
          <StyledUl triggerAnimation={renderMenu}>
            <li>Home</li>
            <li>Edit Account</li>
            <li>Make Pics</li>
            <li>{randomSuggestion.name}</li>
          </StyledUl>
        )}
      </nav>
    );
  }
}

export default Nav;
