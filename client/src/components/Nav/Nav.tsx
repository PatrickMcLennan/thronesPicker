import * as React from 'react';

import { StyledUl, StyledLi } from './Nav.style';
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
    const {
      name,
      profilePic,
      randomSuggestion,
      changeComponent
    }: IProps = this.props;
    const { renderMenu }: IState = this.state;
    return (
      <nav data-testid="nav">
        <h1>name</h1>
        <h1>house</h1>
        <Badge src={profilePic} alt={name} handler={() => this.toggleMenu} />
        {renderMenu && (
          <StyledUl triggerAnimation={renderMenu}>
            <StyledLi
              data-testid="menu__item"
              onClick={changeComponent('showHome')}
              delay={0.25}>
              Home
            </StyledLi>
            <StyledLi
              data-testid="menu__item"
              onClick={changeComponent('showAccountEditor')}
              delay={0.5}>
              Edit Account
            </StyledLi>
            <StyledLi
              data-testid="menu__item"
              onClick={changeComponent('showMakePicks')}
              delay={0.75}>
              Make Picks
            </StyledLi>
            <StyledLi
              data-testid="menu__item"
              onClick={changeComponent('showTheRules')}
              delay={1}>
              The Rules
            </StyledLi>
            <StyledLi
              data-testid="menu__item"
              onClick={changeComponent('showOtherUsers')}
              delay={1.25}>
              See other Picks
            </StyledLi>
            <StyledLi data-testid="menu__item" delay={0.1}>
              {randomSuggestion.name}
            </StyledLi>
          </StyledUl>
        )}
      </nav>
    );
  }
}

export default Nav;
