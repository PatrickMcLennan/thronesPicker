import * as React from 'react';

import Badge from '../Badge/Badge';
import Thumbnail from '../Thumbnail/Thumbnail';

import { StyledNav, StyledUl, StyledLi } from './Nav.style';
import { IUser } from '../../utils/clientDictionary';

interface IProps {
  user: IUser;
  changeComponent: Function;
  changeCurrentUser: Function;
  randomSuggestion?: IUser;
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

  componentWillMount(): void {
    return this.setState({ triggerAnimation: true });
    // return this.setState((prevState: IState) => ({
    //   ...prevState,
    //   triggerAnimation: true
    // }));
  }

  componentWillUnmount() {
    this.setState({ triggerAnimation: false });
    // this.setState((prevState: IState) => ({
    //   ...prevState,
    //   triggerAnimation: false
    // }));
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

  toggleMenu: Function = (): any => {
    return this.setState({ renderMenu: !this.state.renderMenu });
    // return this.setState(
    //   (prevState: IState): IState => ({
    //     ...prevState,
    //     renderMenu: !this.state.renderMenu
    //   })
    // );
  };

  render(): JSX.Element {
    const { user, randomSuggestion, changeComponent }: IProps = this.props;
    const { name, house, profilePic } = user;
    const { renderMenu, triggerAnimation }: IState = this.state;
    return (
      <StyledNav
        data-testid="nav"
        triggerAnimation={triggerAnimation}
        onClick={this.toggleMenu}>
        <h4 data-testid="nav__name">{name.length >= 1 ? name : 'Log In'}</h4>
        <Thumbnail
          src={profilePic.length >= 1 ? profilePic : 'placeholder'}
          name={name}
          size={'small'}
        />
        {renderMenu && (
          <>
            <StyledUl data-testid="nav__ul" triggerAnimation={renderMenu}>
              <StyledLi
                data-testid="nav__li"
                onClick={() => changeComponent('showHome')}
                delay={0.25}>
                Home
              </StyledLi>
              <StyledLi
                data-testid="nav__li"
                onClick={() => changeComponent('showAccountEditor')}
                triggerAnimation={renderMenu}
                delay={0.5}>
                Edit Account
              </StyledLi>
              <StyledLi
                data-testid="nav__li"
                onClick={() => changeComponent('showMakePicks')}
                triggerAnimation={renderMenu}
                delay={0.75}>
                Make Picks
              </StyledLi>
              <StyledLi
                data-testid="nav__li"
                onClick={() => changeComponent('showTheRules')}
                triggerAnimation={renderMenu}
                delay={1}>
                The Rules
              </StyledLi>
              <StyledLi
                data-testid="nav__li"
                onClick={() => changeComponent('showOtherUsers')}
                delay={1.25}
                triggerAnimation={renderMenu}>
                See other Picks
              </StyledLi>
            </StyledUl>
            <Badge
              src={randomSuggestion ? randomSuggestion.profilePic : ''}
              name={randomSuggestion ? randomSuggestion.name : ''}
              house={randomSuggestion ? randomSuggestion.house.name : ''}
              sigilUrl={randomSuggestion ? randomSuggestion.sigilUrl : ''}
              handler={
                randomSuggestion
                  ? () => this.renderPicks(randomSuggestion, 'showUserPicks')
                  : () => console.log('please work')
              }
              currentScore={
                randomSuggestion ? randomSuggestion.currentScore : 0
              }
              thumbnailSize={'small'}
            />
          </>
        )}
      </StyledNav>
    );
  }
}

export default Nav;
