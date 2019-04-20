import * as React from 'react';

import Badge from '../Badge/Badge';
import Thumbnail from '../Thumbnail/Thumbnail';

import { StyledNav, StyledUl, StyledLi } from './Nav.style';
import { IUser } from '../../utils/clientDictionary';

interface IProps {
  name?: string;
  profilePic: string;
  house: string;
  changeComponent: Function;
  changeCurrentUser: Function;
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

  renderPicks: Function = (
    newCurrentUser: IUser,
    newComponent: string
  ): Function => {
    const { changeComponent, changeCurrentUser } = this.props;
    changeCurrentUser(newCurrentUser);
    return changeComponent(newComponent);
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
      house,
      profilePic,
      randomSuggestion,
      changeComponent
    }: IProps = this.props;
    const { renderMenu, triggerAnimation }: IState = this.state;
    return (
      <StyledNav data-testid="nav" triggerAnimation={triggerAnimation}>
        <h1>{name}</h1>
        <h1>{house}</h1>
        <Thumbnail src={profilePic} name={name} size={'small'} />
        {renderMenu && (
          <>
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
            </StyledUl>

            <Badge
              src={randomSuggestion.profilePic}
              name={randomSuggestion.name}
              house={randomSuggestion.house}
              sigilUrl={randomSuggestion.sigilUrl}
              handler={this.renderPicks(randomSuggestion, 'showUserPicks')}
              currentScore={randomSuggestion.currentScore}
              thumbnailSize={'small'}
            />
          </>
        )}
      </StyledNav>
    );
  }
}

export default Nav;
