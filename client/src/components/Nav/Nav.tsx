import * as React from 'react';

import { StyledNav, StyledUl, StyledLi } from './Nav.style';
import Thumbnail from '../Thumbnail/Thumbnail';
import { IUser, IHouse } from '../../utils/clientDictionary';

interface IProps {
  name?: string;
  profilePic: string;
  house: IHouse;
  changeComponent: Function;
  randomSuggestion: IUser;
}

interface IState {
  renderMenu: boolean;
  triggerAnimation: boolean;
}

class Nav extends React.Component<IProps, IState> {
  state = {
    renderMenu: false,
    triggerAnimation: false
  };

  componentWillMount() {
    return this.setState((prevState: IState) => ({
      ...prevState,
      triggerAnimation: true
    }));
  }

  componentWillUnmount() {
    this.setState((prevState: IState) => ({
      ...prevState,
      triggerAnimation: false
    }));
    return setTimeout((): null => null, 750);
  }

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
      house,
      profilePic,
      randomSuggestion,
      changeComponent
    }: IProps = this.props;
    const { renderMenu, triggerAnimation }: IState = this.state;
    return (
      <StyledNav data-testid="nav" triggerAnimation={triggerAnimation}>
        <h1>{name}</h1>
        <h1>{house.name}</h1>
        <Thumbnail
          src={profilePic}
          alt={name}
          handler={() => this.toggleMenu}
        />
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
      </StyledNav>
    );
  }
}

export default Nav;
